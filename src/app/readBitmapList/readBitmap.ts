
import readline from "readline";

import { Bitmap } from "app/bitmap";
import { validateRange } from "app/utils/validateRange";

import { readNumberLine } from "./readNumberLine";

const MAX_BITMAP_SIDE_LENGTH = 182;

export async function readBitmap(rl: readline.Interface): Promise<Bitmap> {

  const data: number[][] = [];
  let isDataHasWhiteDots = false;

  const [height, width] = await readNumberLine(rl);

  if (!height || !width) {
    throw new TypeError("Height and width expected to be set");
  }

  validateRange(width, 1, MAX_BITMAP_SIDE_LENGTH, "Bitmap width");
  validateRange(height, 1, MAX_BITMAP_SIDE_LENGTH, "Bitmap height");

  for (let i = 0; i < height; i += 1) {

    const line = await readNumberLine(rl);

    validateRange(line.length, 1, width, "Bitmap line width");

    line.forEach((value) => {

      validateRange(value, 0, 1, "Bitmap values");

      if (isDataHasWhiteDots) {
        return;
      }

      isDataHasWhiteDots = value === 1;

    });

    data.push(line);

  }

  if (!isDataHasWhiteDots) {
    throw new TypeError("Bitmap should contain at least one white dot");
  }

  return { width, height, data };

}
