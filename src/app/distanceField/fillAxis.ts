
import { DistanceDot } from "app/distanceDot";

export type DotSelectorFn =
  (mainAxisPos: number, crossAxisPos: number) => DistanceDot;

export function fillAxis(getDotAt: DotSelectorFn, mainAxisLen: number, crossAxisLen: number) {

  for (let crossAxisPos = 0; crossAxisPos < crossAxisLen; crossAxisPos += 1) {

    for (let mainAxisPos = 1; mainAxisPos < mainAxisLen; mainAxisPos += 1) {

      const currentDot = getDotAt(mainAxisPos, crossAxisPos);
      const previousDot = getDotAt(mainAxisPos - 1, crossAxisPos);

      currentDot.suggestMinDistanceWith(previousDot);

    }

    for (let mainAxisPos = mainAxisLen - 2; mainAxisPos > -1; mainAxisPos -= 1) {

      const currentDot = getDotAt(mainAxisPos, crossAxisPos);
      const previousDot = getDotAt(mainAxisPos + 1, crossAxisPos);

      currentDot.suggestMinDistanceWith(previousDot);

    }

  }

}
