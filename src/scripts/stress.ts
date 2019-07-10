
import { run } from "app";
import { Bitmap } from "app/bitmap";

const COLS_COUNT = 182;
const ROWS_COUNT = 182;

function bitmapRow() {

  return Array.from(
    Array(COLS_COUNT),
    () => Math.round(Math.random() / 1.42),
  );

}

function createBitmap(): Bitmap {

  return {

    width: COLS_COUNT,
    height: ROWS_COUNT,

    data: Array.from(Array(ROWS_COUNT), bitmapRow),

  };
}

async function* bitmapGenerator() {

  for (let i = 0; i < 100; i += 1) {
    yield createBitmap();
  }

}

const startTime = process.hrtime();

run(bitmapGenerator)
  .then(() => {

    console.log("Total seconds: ", process.hrtime(startTime)[0]);

  });
