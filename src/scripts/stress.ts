
import { Bitmap } from "app/bitmap";
import { initBitmapListProcessing } from "app";

const COLS_COUNT = 182;
const ROWS_COUNT = 182;

function bitmapRow() {

  return Array.from(
    Array(COLS_COUNT),
    () => Math.round(Math.random()),
  );

}

function createBitmap(): Bitmap {

  return {

    width: COLS_COUNT,
    height: ROWS_COUNT,

    data: Array.from(Array(ROWS_COUNT), bitmapRow),

  };
}

const bitmapList = Array.from(Array(1000), createBitmap);

const startTime = process.hrtime();
initBitmapListProcessing(bitmapList)
  .then(() => {

    console.log("Total seconds: ", process.hrtime(startTime)[0]);

  });
