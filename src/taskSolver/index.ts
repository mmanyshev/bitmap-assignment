
import { Bitmap } from "types/bitmap";

import { prepareTask } from "./prepareTask";
import { fillColumns } from "./fillColumns";
import { fillRowsWithReferenceDots } from "./fillRowsWithReferenceDots";

export function solve() {

  const startTime = process.hrtime();
  console.info("Start task: ", startTime);

  const bitmap: Bitmap = [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    // [0, 1, 1, 0],
  ];

  const task = prepareTask(bitmap);

  fillRowsWithReferenceDots(task);
  fillColumns(task);

  console.log(task.distanceField);

  const endTime = process.hrtime();
  console.info("End task: ", endTime[0] - startTime[0], endTime[1] - startTime[1]);

}
