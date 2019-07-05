
import { Bitmap } from "app/bitmap";
import { DistanceDot } from "app/distanceDot";

import { DistanceField } from ".";

test("DistanceField should reflect width & height", () => {

  const bitmap: Bitmap = {

    width: 3,
    height: 4,

    data: [
      [1, 0, 0],
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 1],
    ],

  };

  const distanceField = new DistanceField(bitmap);

  expect(distanceField.width).toBe(3);
  expect(distanceField.height).toBe(4);

});

test("it convert bitmap pixels into distanceField dots", () => {

  const bitmap: Bitmap = {

    width: 3,
    height: 4,

    data: [
      [1, 0, 0],
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 1],
    ],

  };

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

test("it correclty converts to string", () => {

  const bitmap: Bitmap = {

    width: 4,
    height: 3,

    data: [
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 0],
    ],

  };

  const expectedResult = "\n3 2 1 0\n2 1 0 0\n1 0 0 1\n";

  const distanceField = new DistanceField(bitmap);
  distanceField.fill();

  expect(distanceField.toString()).toBe(expectedResult);

});
