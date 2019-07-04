
import { Bitmap } from "app/bitmap";

import { Field } from "app/field";
import { DistanceDot } from "app/distanceDot";

import { fillAxis, DotSelectorFn } from "./fillAxis";

export class DistanceField extends Field<DistanceDot> {

  constructor(bitmap: Bitmap) {

    super();

    this.rows = bitmap.map((row: number[], y: number) => {
      return row.map((value: number, x: number) => {

        const dot = new DistanceDot(x, y);
        dot.distance = value === 1 ? 0 : dot.distance;

        return dot;

      });
    });

  }

  public fill() {

    const getDotAtForXAxis: DotSelectorFn =
      (mainAxisPos, crossAxisPos) => this.rows[crossAxisPos][mainAxisPos];

    const getDotAtForYAxis: DotSelectorFn =
      (mainAxisPos, crossAxisPos) => this.rows[mainAxisPos][crossAxisPos];

    fillAxis(getDotAtForXAxis, this.rows[0].length, this.rows.length);
    fillAxis(getDotAtForYAxis, this.rows.length, this.rows[0].length);

  }

}
