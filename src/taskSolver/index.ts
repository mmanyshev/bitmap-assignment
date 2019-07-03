
import { Bitmap } from "types/bitmap";

import { Dot } from "./dot";
import { prepareTask } from "./prepareTask";
import { fillRowsWithReferenceDots } from "./fillRowsWithReferenceDots";

export function solve() {

  const startTime = process.hrtime();
  console.info("Start task: ", startTime);

  const bitmap: Bitmap = [
    [1, 0, 0, 0],
    // [0, 1, 0, 1],
    // [0, 1, 1, 0],
    // [0, 0, 0, 1],
  ];

  const task = prepareTask(bitmap);
  // console.dir(task, { depth: 5 });

  fillRowsWithReferenceDots(task);

  console.dir(task.distanceField, { depth: 3 });

  const endTime = process.hrtime();
  console.info("End task: ", endTime[0] - startTime[0], endTime[1] - startTime[1]);

}
