
import { Bitmap } from "app/bitmap";
import { DistanceDot } from "app/distanceDot";

import { DistanceField } from ".";

test("return distanceField of correct shape", () => {

  const bitmap: Bitmap = [
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 1],
  ];

  const distanceField = new DistanceField(bitmap);

  expect(distanceField.rows.length).toBe(4);
  expect(distanceField.rows[0].length).toBe(3);

});

test("it convert bitmap pixels into distanceField dots", () => {

  const bitmap: Bitmap = [
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 1],
  ];

  const expectedDistanceField = [
    [new DistanceDot(0, 0), new DistanceDot(1, 0), new DistanceDot(2, 0)],
    [new DistanceDot(0, 1), new DistanceDot(1, 1), new DistanceDot(2, 1)],
    [new DistanceDot(0, 2), new DistanceDot(1, 2), new DistanceDot(2, 2)],
    [new DistanceDot(0, 3), new DistanceDot(1, 3), new DistanceDot(2, 3)],
  ];

  expectedDistanceField[0][0].distance = 0;
  expectedDistanceField[1][1].distance = 0;
  expectedDistanceField[2][1].distance = 0;
  expectedDistanceField[2][1].distance = 0;
  expectedDistanceField[1][2].distance = 0;
  expectedDistanceField[2][2].distance = 0;
  expectedDistanceField[3][2].distance = 0;

  const distanceField = new DistanceField(bitmap);
  expect(distanceField.rows).toStrictEqual(expectedDistanceField);

});
