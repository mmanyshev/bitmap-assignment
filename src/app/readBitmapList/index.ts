
import { once } from "events";
import readline from "readline";

import { Bitmap } from "app/bitmap";
import { validateRange } from "app/utils/validateRange";

import { readBitmap } from "./readBitmap";
import { readNumberLine } from "./readNumberLine";

const MAX_TEST_CASES_AMOUNT = 1000;

export async function readBitmapList(): Promise<Bitmap[]> {

  const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

    crlfDelay: Infinity,

  });

  const bitmapList: Bitmap[] = [];

  let [testCasesAmount = 0] = await readNumberLine(rl);
  validateRange(testCasesAmount, 1, MAX_TEST_CASES_AMOUNT, "Test cases amount");

  do {

    const bitmap = await readBitmap(rl);
    bitmapList.push(bitmap);

    if (testCasesAmount !== 1) {
      await once(rl, "line"); // empty line between bitmaps
    }

  } while (testCasesAmount -= 1);

  rl.close();
  return bitmapList;

}
