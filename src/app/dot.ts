
export class Dot {

  public readonly x: number;
  public readonly y: number;

  constructor(x: number, y: number) {

    this.x = x;
    this.y = y;

  }

  public getDistanceTo(dot: Dot): number {
    return Math.abs(this.x - dot.x) + Math.abs(this.y - dot.y);
  }

  toString() {
    return `{${this.x},${this.y}}`;
  }

}
