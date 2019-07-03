
import { Dot } from "./dot";
import { Bitmap } from "types/bitmap";

interface DotCache {
  byRow: { [index: number]: Dot[] };
}

export interface Task {

  distanceField: Dot[][];
  zeroDistanceDotCache: DotCache;

}

export function prepareTask(bitmap: Bitmap): Task {

  const zeroDistanceDotCache: DotCache = {
    byRow: {},
  };

  const distanceField = bitmap.map((row: number[], y: number) => {
    return row.map((pixel: number, x: number) => {

      const dot = new Dot(x, y);

      if (pixel === 1) {

        dot.distance = 0;
        const { byRow } = zeroDistanceDotCache;

        byRow[y] = byRow[y] || [];
        byRow[y].push(dot);

      }

      return dot;

    });
  });

  return {
    distanceField,
    zeroDistanceDotCache,
  };

}
