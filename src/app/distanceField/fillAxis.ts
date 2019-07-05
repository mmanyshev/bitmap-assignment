
import { DistanceDot } from "app/distanceDot";

export type DotSelectorFn =
  (mainAxisPos: number, crossAxisPos: number) => DistanceDot;

export function fillAxis(getDotAt: DotSelectorFn, mainAxisLen: number, crossAxisLen: number) {

  for (let crossAxisPos = 0; crossAxisPos < crossAxisLen; crossAxisPos += 1) {

    for (let mainAxisPos = 1; mainAxisPos < mainAxisLen; mainAxisPos += 1) {

      const leftCursor = getDotAt(mainAxisPos, crossAxisPos);
      const leftPreCursor = getDotAt(mainAxisPos - 1, crossAxisPos);

      leftCursor.suggestMinDistanceWith(leftPreCursor);

      const rightCursor = getDotAt(mainAxisLen - mainAxisPos - 1, crossAxisPos);
      const rightPreCursor = getDotAt(mainAxisLen - mainAxisPos, crossAxisPos);

      rightCursor.suggestMinDistanceWith(rightPreCursor);

    }

  }

}
