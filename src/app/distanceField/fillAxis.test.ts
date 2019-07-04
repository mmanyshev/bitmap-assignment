
import { DistanceDot } from "app/distanceDot";
import { fillAxis, DotSelectorFn } from "./fillAxis";

test("Should correctly fill column", () => {

  const dot1 = new DistanceDot(0, 0);
  const dot2 = new DistanceDot(0, 1);
  const dot3 = new DistanceDot(0, 2);
  const dot4 = new DistanceDot(0, 3);

  dot3.distance = 0;

  const rows: DistanceDot[][] = [
    [dot1], [dot2], [dot3], [dot4],
  ];

  const getDotAtForYAxis: DotSelectorFn =
      (mainAxisPos, crossAxisPos) => rows[mainAxisPos][crossAxisPos];

  fillAxis(getDotAtForYAxis, 4, 1);

  const expectedDot1 = new DistanceDot(0 , 0);
  const expectedDot2 = new DistanceDot(0 , 1);
  const expectedDot3 = new DistanceDot(0 , 2);
  const expectedDot4 = new DistanceDot(0 , 3);

  expectedDot1.distance = 2;
  expectedDot2.distance = 1;
  expectedDot3.distance = 0;
  expectedDot4.distance = 1;

  const expectedResult: DistanceDot[][] = [
    [expectedDot1], [expectedDot2], [expectedDot3], [expectedDot4],
  ];

  expect(rows).toStrictEqual(expectedResult);

});

test("should correctly fill rows", () => {

  const dot1 = new DistanceDot(0, 0);
  const dot2 = new DistanceDot(1, 0);
  const dot3 = new DistanceDot(2, 0);
  const dot4 = new DistanceDot(3, 0);

  dot3.distance = 0;

  const rows: DistanceDot[][] = [
    [dot1, dot2, dot3, dot4],
  ];

  const getDotAtForXAxis: DotSelectorFn =
      (mainAxisPos, crossAxisPos) => rows[crossAxisPos][mainAxisPos];

  fillAxis(getDotAtForXAxis, 4, 1);

  const expectedDot1 = new DistanceDot(0, 0);
  const expectedDot2 = new DistanceDot(1, 0);
  const expectedDot3 = new DistanceDot(2, 0);
  const expectedDot4 = new DistanceDot(3, 0);

  expectedDot1.distance = 2;
  expectedDot2.distance = 1;
  expectedDot3.distance = 0;
  expectedDot4.distance = 1;

  const expectedResult: DistanceDot[][] = [
    [expectedDot1, expectedDot2, expectedDot3, expectedDot4],
  ];

  expect(rows).toStrictEqual(expectedResult);

});
