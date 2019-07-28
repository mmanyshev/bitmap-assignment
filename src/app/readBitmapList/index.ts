
import readline from "readline";

import { Bitmap } from "app/bitmap";
import { validateRange } from "app/utils/validateRange";

import { readBitmap } from "./readBitmap";
import { readNumberLine } from "./readNumberLine";

const MAX_TEST_CASES_AMOUNT = 1000;

export async function* readBitmapList(): AsyncIterableIterator<Bitmap> {

  const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

  });

  const rlIterator = rl[Symbol.asyncIterator]();

  let [testCasesAmount = 0] = await readNumberLine(rlIterator);
  validateRange(testCasesAmount, 1, MAX_TEST_CASES_AMOUNT, "Test cases amount");

  do {

    yield readBitmap(rlIterator);

    if (testCasesAmount !== 1) {
      await rlIterator.next(); // empty line between bitmaps
    }

  } while (testCasesAmount -= 1);

  rl.close();

}
