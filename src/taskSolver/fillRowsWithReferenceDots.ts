
import { Dot } from "./dot";
import { Task } from "./prepareTask";

export const makeReferenceDotsGetter = (
  referenceDotList: Dot[],
) => {

  const interator =
    referenceDotList[Symbol.iterator]();

  let leftDot: Dot;
  let rightDot = interator.next().value;

  return (x: number) => {

    if (!rightDot) {
      return { leftDot, rightDot };
    }

    if (rightDot.x >= x) {
      return { leftDot, rightDot };
    }

    leftDot = rightDot;
    rightDot = interator.next().value;

    return { leftDot, rightDot };

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
    const getReferenceDots = makeReferenceDotsGetter(referenceDotList);

    row.forEach((dot, x) => {

      const { leftDot, rightDot } = getReferenceDots(x);

      if (leftDot) {
        dot.suggestDistanceTo(leftDot);
      }

      if (rightDot) {
        dot.suggestDistanceTo(rightDot);
      }

    });

  });

}
