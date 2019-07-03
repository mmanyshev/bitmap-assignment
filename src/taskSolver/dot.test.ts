
import { Dot } from "./dot";

test("it reflects coordinates", () => {

  const dot1 = new Dot(3, 4);
  const dot2 = new Dot(0, 0);

  expect(dot1.x).toBe(3);
  expect(dot1.y).toBe(4);
  expect(dot2.x).toBe(0);
  expect(dot2.y).toBe(0);

});

test("it calculate distance to dot", () => {

  const dot1 = new Dot(3, 4);
  const dot2 = new Dot(0, 0);

  expect(dot1.getDistanceTo(dot2)).toBe(7);
  expect(dot2.getDistanceTo(dot1)).toBe(7);

});

test("it pick minimum distance over distance to specified dot", () => {

  const dot1 = new Dot(3, 4);
  const dot2 = new Dot(0, 0);

  dot1.distance = 0;
  dot2.distance = 2; // local min
  dot1.trySetDistanceToMin(dot2);

  expect(dot1.distance).toBe(0);

  dot1.distance = 10;
  dot1.trySetDistanceToMin(dot2);

  expect(dot1.distance).toBe(9);

});
