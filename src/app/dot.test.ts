
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

test("it reflect coordinate when converted to string", () => {

  const dot1 = new Dot(3, 4);
  const dot2 = new Dot(0, 0);

  expect(dot1.toString()).toBe("{3,4}");
  expect(dot2.toString()).toBe("{0,0}");

});
