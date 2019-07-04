
import { solve } from "./taskSolver";
import { Dot } from "./taskSolver/dot";

function printOutResult(field: Dot[][]) {

  field.forEach((row) => {
    process.stdout.write(`${row.join(" ")}\n`);
  });

}

const distanceField = solve();
printOutResult(distanceField);
