
import workerFarm from "worker-farm";

import { Bitmap } from "app/bitmap";
import { readBitmapList } from "app/readBitmapList";

function initBitmapListProcessing(bitmapList: Bitmap[]) {

  const workers = workerFarm(
    require.resolve("./worker"),
    ["processBitmap"],
  );

  bitmapList.forEach((bitmap) => {
    workers.processBitmap(bitmap, (error: Error | null, result: any) => {

      if (error) {

        console.error("Error in worker:", error.message);
        return;

      }

      process.stdout.write(result.field);

      if (process.env.NODE_ENV !== "production") {
        process.stdout.write(result.summary);
      }

    });
  });

  workerFarm.end(workers);

}

readBitmapList()
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
