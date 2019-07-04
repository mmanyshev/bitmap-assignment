
import { Bitmap } from "app/bitmap";

import { Field } from "app/field";
import { DistanceDot } from "app/distanceDot";

import { fillAxis, DotSelectorFn } from "./fillAxis";

export class DistanceField extends Field<DistanceDot> {

  public rows: DistanceDot[][];

  private fillTime: number = 0;
  private constructorTime: number = 0;

  constructor(bitmap: Bitmap) {

    super(bitmap);
    const startTime = process.hrtime();

    this.rows = bitmap.data.map((row: number[], y: number) => {
      return row.map((value: number, x: number) => {

        const dot = new DistanceDot(x, y);
        dot.distance = value === 1 ? 0 : dot.distance;

        return dot;

      });
    });

    this.constructorTime =
      process.hrtime(startTime)[1] / 1e6;

  }

  public fill() {

    const startTime = process.hrtime();

    const getDotAtForXAxis: DotSelectorFn =
      (mainAxisPos, crossAxisPos) => this.rows[crossAxisPos][mainAxisPos];

    const getDotAtForYAxis: DotSelectorFn =
      (mainAxisPos, crossAxisPos) => this.rows[mainAxisPos][crossAxisPos];

    fillAxis(getDotAtForXAxis, this.width, this.height);
    fillAxis(getDotAtForYAxis, this.height, this.width);

    this.fillTime =
      process.hrtime(startTime)[1] / 1e6;

  }

  public getFormmattedStats() {

    return `\n\nSize: ${this.width}x${this.height} \
      Constructor time: ${this.constructorTime}ms; Fill time: ${this.fillTime}ms;\n\n`;

  }

}
