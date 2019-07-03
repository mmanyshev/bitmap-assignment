
export class Dot {

  public readonly x: number;
  public readonly y: number;

  public distance: number = Infinity;

  constructor(x: number, y: number) {

    this.x = x;
    this.y = y;

  }

  public getDistanceTo(dot: Dot): number {
    return Math.abs(this.x - dot.x) + Math.abs(this.y - dot.y);
  }

  public tryApplyDistanceTo(dot: Dot): void {

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

}
