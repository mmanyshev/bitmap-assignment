
import { promisify } from "util";

import workerFarm, { FarmOptions } from "worker-farm";

import { Bitmap } from "app/bitmap";
import { readBitmapList } from "app/readBitmapList";
import { ProcessBitmapWorkerResult } from "./worker";

const WORKER_OPTIONS: FarmOptions = {
  maxRetries: 0,
};

export async function run(readBitmapListGenerator = readBitmapList) {

  const workers = workerFarm(
    WORKER_OPTIONS,
    require.resolve("./worker"),
    ["processBitmap"],
  );

  const workerPromises = [];
  const processBitmap = promisify(<any>workers.processBitmap);

  const processBitmapFailSafe = (bitmap: Bitmap) => {

    return processBitmap(bitmap)
      .catch((error: Error) => {

        console.error("Error in worker:", error.message);
        return null;

      });

  };

  try {

    for await (const bitmap of readBitmapListGenerator()) {
      workerPromises.push(processBitmapFailSafe(bitmap));
    }

  } catch (error) {

    console.error("Not able to process input:", error.message);
    process.exit();

  }

  workerFarm.end(workers);
  const resultList: ProcessBitmapWorkerResult[] = await Promise.all(workerPromises);

  resultList.forEach((result) => {

    if (!result) {
      return;
    }

    process.stdout.write(result.field);

    if (process.env.NODE_ENV !== "production") {
      process.stdout.write(result.stats);
    }

  });

}

if (require.main === module) {

  const startTime = process.hrtime();

  run()
    .then(() => {

      const [duration] = process.hrtime(startTime);
      console.log("Total duration, sec", duration);

    })
    .catch((error: Error) => {

      console.error("Error while processing test cases:", error.message);
      process.exit();

    });

}
