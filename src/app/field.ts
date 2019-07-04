
import { Dot } from "app/dot";
import { Bitmap } from "app/bitmap";

export abstract class Field<T extends Dot> {

  public readonly width: number;
  public readonly height: number;
  public abstract readonly rows: T[][] = [];

  abstract fill(): void;

  constructor(bitmap: Bitmap) {

    this.width = bitmap.width;
    this.height = bitmap.height;

  }

  toString() {

    return this.rows.reduce(
      (acc, row) => `\n${acc}${row.join(" ")}\n`,
      "",
    );

  }

}
