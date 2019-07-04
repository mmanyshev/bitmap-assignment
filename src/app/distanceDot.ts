
import { Dot } from "app/dot";

export class DistanceDot extends Dot {

  public distance: number = Infinity;

  constructor(x: number, y: number) {
    super(x, y);
  }

  public suggestMinDistanceWith(dot: DistanceDot): void {

    if (this.distance === 0) {
      return;
    }

    const distance =
      this.getDistanceTo(dot) + dot.distance;

    if (distance > this.distance) {
      return;
    }

    this.distance = distance;

  }

  public toString(): string {

    return this.distance
      .toString()
      .padStart(5, " ");

  }

}
