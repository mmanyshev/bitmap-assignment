
import { Dot } from "app/dot";

export abstract class Field<T extends Dot> {

  public rows: T[][] = [];

  abstract fill(): void;

  toString() {

    return this.rows.reduce(
      (acc: string, row) => `${acc}${row.join(" ")}\n`,
      "",
    );

  }

}
