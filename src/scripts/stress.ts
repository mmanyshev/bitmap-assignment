
import { run } from "app";
import { Bitmap } from "app/bitmap";

const COLS_COUNT = 182;
const ROWS_COUNT = 182;
export const TEST_CASE_AMOUNT = 1000;

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

const tick = () =>
  new Promise((resolve) => setImmediate(resolve));

export async function* bitmapGenerator() {

  for (let i = 0; i < TEST_CASE_AMOUNT; i += 1) {

    yield createBitmap();

    if (i % 5 === 0) {
      await tick();
    }

  }

}

if (require.main === module) {
  run(bitmapGenerator);
}
