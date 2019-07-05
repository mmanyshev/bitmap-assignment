
import { promisify } from "util";

import workerFarm from "worker-farm";

import { Bitmap } from "app/bitmap";
import { readBitmapList } from "app/readBitmapList";
import { ProcessBitmapWorkerResult } from "./worker";

const WORKER_OPTIONS = {
  maxRetries: 0,
};

export function initBitmapListProcessing(bitmapList: Bitmap[]) {

  const workers = workerFarm(
    WORKER_OPTIONS,
    require.resolve("./worker"),
    ["processBitmap"],
  );

  const processBitmap =
    promisify(<any>workers.processBitmap);

  const workerPromises = bitmapList.map((bitmap, index) => {

    return processBitmap(bitmap)
      .catch((error: Error) => {

        console.error("Error in worker:", error.message);
        return null;

      });

  });

  workerFarm.end(workers);

  return Promise.all(workerPromises)
    .then((resultList: ProcessBitmapWorkerResult[]) => {

      resultList.forEach((result) => {

        if (!result) {
          return;
        }

        process.stdout.write(result.field);

        if (process.env.NODE_ENV !== "production") {
          process.stdout.write(result.stats);
        }

      });

    });

}

export function run() {

  return readBitmapList()
    .then(
      initBitmapListProcessing,
      (error) => {

        console.error("Not able to process input:", error.message);
        process.exit();

      },
    )
    .catch((error) => {

      console.error("Error while processing test cases:", error.message);
      process.exit();

    });

}

if (require.main === module) {
  run();
}
