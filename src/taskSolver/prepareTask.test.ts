
import { Bitmap } from "types/bitmap";
import { prepareTask } from "./prepareTask";
import { Dot } from "./dot";

test("return distanceField of correct shape", () => {

  const bitmap: Bitmap = [
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 1],
  ];

  const task = prepareTask(bitmap);

  expect(task.distanceField.length).toBe(4);
  expect(task.distanceField[0].length).toBe(3);

});

test("it convert bitmap pixels into distanceField dots", () => {

  const bitmap: Bitmap = [
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 1],
  ];

  const expectedDistanceField = [
    [new Dot(0, 0), new Dot(1, 0), new Dot(2, 0)],
    [new Dot(0, 1), new Dot(1, 1), new Dot(2, 1)],
    [new Dot(0, 2), new Dot(1, 2), new Dot(2, 2)],
    [new Dot(0, 3), new Dot(1, 3), new Dot(2, 3)],
  ];

  expectedDistanceField[0][0].distance = 0;
  expectedDistanceField[1][1].distance = 0;
  expectedDistanceField[2][1].distance = 0;
  expectedDistanceField[2][1].distance = 0;
  expectedDistanceField[1][2].distance = 0;
  expectedDistanceField[2][2].distance = 0;
  expectedDistanceField[3][2].distance = 0;

  const { distanceField } = prepareTask(bitmap);
  expect(distanceField).toStrictEqual(expectedDistanceField);

});

test("it caches zero distance dots", () => {

  const bitmap: Bitmap = [
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 1],
  ];

  const { zeroDistanceDotCache } = prepareTask(bitmap);

  expect(Object.keys(zeroDistanceDotCache.byColumn).length).toBe(3);
  expect(zeroDistanceDotCache.byColumn[0].length).toBe(1);
  expect(zeroDistanceDotCache.byColumn[1].length).toBe(2);
  expect(zeroDistanceDotCache.byColumn[2].length).toBe(3);

  Object.entries(zeroDistanceDotCache.byColumn)
    .forEach(([key, value]) => {

      const isZeroDistanceDotsOnly =
        value.every((dot) => dot.distance === 0);

      expect(isZeroDistanceDotsOnly).toBe(true);

    });

});
