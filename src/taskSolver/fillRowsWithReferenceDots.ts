
import { Dot } from "./dot";
import { Task } from "./prepareTask";

const makeNextReferenceDotGetter = (
  referenceDotList: Dot[],
  rtlDirection = false,
) => {

  let index = rtlDirection ?
    referenceDotList.length - 1 : 0;

  const step = rtlDirection ? -1 : 1;

  return (x: number) => {

    const dot = referenceDotList[index];
    console.log(dot, x, rtlDirection);

    if (!dot) {
      return null;
    }

    if (!rtlDirection && dot.x > x) {
      return dot;
    }

    if (rtlDirection && dot.x < x) {
      return dot;
    }

    index += step;
    return referenceDotList[index] || null;

  };

};

export function fillRowsWithReferenceDots(task: Task): void {

  const {
    distanceField,
    zeroDistanceDotCache,
  } = task;

  distanceField.forEach((row, y) => {

    if (!zeroDistanceDotCache.byRow[y]) {
      return;
    }

    const referenceDotList = zeroDistanceDotCache.byRow[y];
    const getNextLeftReferenceDot = makeNextReferenceDotGetter(referenceDotList, true);
    const getNextRightReferenceDot = makeNextReferenceDotGetter(referenceDotList);

    row.forEach((dot, x) => {

      const leftDot = getNextLeftReferenceDot(x);
      const rightDot = getNextRightReferenceDot(x);

      console.log(leftDot);
      console.log(rightDot);

      if (leftDot) {
        dot.tryApplyDistanceTo(leftDot);
      }

      if (rightDot) {
        dot.tryApplyDistanceTo(rightDot);
      }

    });

  });

}
