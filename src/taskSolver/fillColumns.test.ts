
import { Dot } from "./dot";
import { fillColumns } from "./fillColumns";

test("Should correctly fill column with reference dot", () => {

  const dot1 = new Dot(0, 0);
  const dot2 = new Dot(0, 1);
  const dot3 = new Dot(0, 2);
  const dot4 = new Dot(0, 3);

  dot3.distance = 0;

  const distanceField: Dot[][] = [
    [dot1], [dot2], [dot3], [dot4],
  ];

  fillColumns({
    distanceField,
    zeroDistanceDotCache: { byRow: {} },
  });

  console.log(distanceField);

  const expectedDot1 = new Dot(0 , 0);
  expectedDot1.distance = 2;
  const expectedDot2 = new Dot(0 , 1);
  expectedDot2.distance = 1;
  const expectedDot3 = new Dot(0 , 2);
  expectedDot3.distance = 0;
  const expectedDot4 = new Dot(0 , 3);
  expectedDot4.distance = 1;

  const expectedResult: Dot[][] = [
    [expectedDot1], [expectedDot2], [expectedDot3], [expectedDot4],
  ];

  expect(distanceField).toStrictEqual(expectedResult);

});

// test("Should correctly fill multiple columns", () => {

//   const dot1 = new Dot(0, 0);
//   const dot2 = new Dot(0, 1);
//   const dot3 = new Dot(0, 2);
//   const dot4 = new Dot(0, 3);

//   dot3.distance = 0;

//   const distanceField: Dot[][] = [
//     [dot1], [dot2], [dot3], [dot4],
//   ];

//   fillColumns({
//     distanceField,
//     zeroDistanceDotCache: { byRow: {} },
//   });

//   const expectedDot1 = new Dot(0 , 0);
//   expectedDot1.distance = 2;
//   const expectedDot2 = new Dot(0 , 1);
//   expectedDot2.distance = 1;
//   const expectedDot3 = new Dot(0 , 2);
//   expectedDot3.distance = 0;
//   const expectedDot4 = new Dot(0 , 3);
//   expectedDot4.distance = 1;

//   const expectedResult: Dot[][] = [
//     [expectedDot1], [expectedDot2], [expectedDot3], [expectedDot4],
//   ];

//   expect(distanceField).toStrictEqual(expectedResult);

// });
