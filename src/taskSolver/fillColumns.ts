
import { Task } from "./prepareTask";

export function fillColumns(task: Task) {

  const { distanceField } = task;

  for (let i = 1, len = distanceField.length; i !== len; i += 1) {

    distanceField[i].forEach((dot, x) => {

      const upperDot = distanceField[i - 1][x];
      dot.tryApplyDistanceTo(upperDot);

    });

    distanceField[len - i - 1].forEach((dot, x) => {

      const upperDot = distanceField[len - i][x];
      dot.tryApplyDistanceTo(upperDot);

    });

  }

}
