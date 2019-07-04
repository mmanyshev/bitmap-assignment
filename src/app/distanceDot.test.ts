
import { DistanceDot } from "./distanceDot";

test("it pick minimum distance over distance to specified dot", () => {

  const dot1 = new DistanceDot(3, 4);
  const dot2 = new DistanceDot(0, 0);

  dot1.distance = 0;
  dot2.distance = 2;
  dot1.suggestMinDistanceWith(dot2);

  expect(dot1.distance).toBe(0);

  dot1.distance = 10;
  dot1.suggestMinDistanceWith(dot2);

  expect(dot1.distance).toBe(9);

  dot1.distance = 6;
  dot1.suggestMinDistanceWith(dot2);

  expect(dot1.distance).toBe(6);

});

test("it reflect distance when converted to string", () => {

  const dot1 = new DistanceDot(3, 4);
  const dot2 = new DistanceDot(0, 0);

  dot1.distance = 0;
  dot2.distance = 600;

  expect(dot1.toString()).toStrictEqual("    0");
  expect(dot2.toString()).toStrictEqual("  600");

});
