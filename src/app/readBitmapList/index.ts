
import { once } from "events";
import readline from "readline";

import { Bitmap } from "app/bitmap";

import { readBitmap } from "./readBitmap";
import { readNumberLine } from "./readNumberLine";

export async function readBitmapList(): Promise<Bitmap[]> {

  const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

    crlfDelay: Infinity,

  });

  const bitmapList: Bitmap[] = [];
  let [testCaseAmount = 0] = await readNumberLine(rl);

  if (testCaseAmount <= 0) {
    throw new RangeError("Test cases amount expected to pe positive integer");
  }

  do {

    const bitmap = await readBitmap(rl);
    bitmapList.push(bitmap);

    if (testCaseAmount !== 1) {
      await once(rl, "line"); // empty line between bitmaps
    }

  } while (testCaseAmount -= 1);

  rl.close();
  return bitmapList;

}
