
import { Dot } from "./dot";
import { Bitmap } from "types/bitmap";

interface DotCache {
  byColumn: { [index: number]: Dot[] };
}

interface Task {

  distanceField: Dot[][];
  zeroDistanceDotCache: DotCache;

}

export function prepareTask(bitmap: Bitmap): Task {

  const zeroDistanceDotCache: DotCache = {
    byColumn: {},
  };

  const distanceField = bitmap.map((row: number[], y: number) => {
    return row.map((pixel: number, x: number) => {

      const dot = new Dot(x, y);

      if (pixel === 1) {

        dot.distance = 0;
        const { byColumn } = zeroDistanceDotCache;

        byColumn[x] = byColumn[x] || [];
        byColumn[x].push(dot);

      }

      return dot;

    });
  });

  return {
    distanceField,
    zeroDistanceDotCache,
  };

}
