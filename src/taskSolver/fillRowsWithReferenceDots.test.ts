
import { makeReferenceDotsGetter } from "./fillRowsWithReferenceDots";
import { Dot } from "./dot";

test("return correct reference dots for single point in the middle", () => {

  const referenceDots = [new Dot(2, 0)];
  const getDots = makeReferenceDotsGetter(referenceDots);

  const firstRun = getDots(0);
  expect(firstRun.leftDot).toBeUndefined();
  expect(firstRun.rightDot).toStrictEqual(referenceDots[0]);

  const secondRun = getDots(1);
  expect(secondRun.leftDot).toBeUndefined();
  expect(secondRun.rightDot).toStrictEqual(referenceDots[0]);

  const thirdRun = getDots(2);
  expect(thirdRun.leftDot).toBeUndefined();
  expect(thirdRun.rightDot).toStrictEqual(referenceDots[0]);

  const forthRun = getDots(3);
  expect(forthRun.leftDot).toStrictEqual(referenceDots[0]);
  expect(forthRun.rightDot).toBeUndefined();

  const fifthRun = getDots(10);
  expect(fifthRun.leftDot).toStrictEqual(referenceDots[0]);
  expect(fifthRun.rightDot).toBeUndefined();

});

test("return correct reference dots for multiple reference dots in the middle", () => {

  const referenceDots = [new Dot(2, 0), new Dot(8, 0)];
  const getDots = makeReferenceDotsGetter(referenceDots);

  const firstRun = getDots(0);
  expect(firstRun.leftDot).toBeUndefined();
  expect(firstRun.rightDot).toStrictEqual(referenceDots[0]);

  const secondRun = getDots(1);
  expect(secondRun.leftDot).toBeUndefined();
  expect(secondRun.rightDot).toStrictEqual(referenceDots[0]);

  const thirdRun = getDots(4);
  expect(thirdRun.leftDot).toStrictEqual(referenceDots[0]);
  expect(thirdRun.rightDot).toStrictEqual(referenceDots[1]);

  const forthRun = getDots(6);
  expect(forthRun.leftDot).toStrictEqual(referenceDots[0]);
  expect(forthRun.rightDot).toStrictEqual(referenceDots[1]);

  const fifthRun = getDots(10);
  expect(fifthRun.leftDot).toStrictEqual(referenceDots[1]);
  expect(fifthRun.rightDot).toBeUndefined();

  const sixthRun = getDots(16);
  expect(sixthRun.leftDot).toStrictEqual(referenceDots[1]);
  expect(sixthRun.rightDot).toBeUndefined();

});

test("it correctly handle dots on the edges", () => {

  const referenceDots = [new Dot(0, 0), new Dot(8, 0)];
  const getDots = makeReferenceDotsGetter(referenceDots);

  const firstRun = getDots(0);
  expect(firstRun.leftDot).toBeUndefined();
  expect(firstRun.rightDot).toStrictEqual(referenceDots[0]);

  const secondRun = getDots(2);
  expect(secondRun.leftDot).toStrictEqual(referenceDots[0]);
  expect(secondRun.rightDot).toStrictEqual(referenceDots[1]);

  const thirdRun = getDots(6);
  expect(thirdRun.leftDot).toStrictEqual(referenceDots[0]);
  expect(thirdRun.rightDot).toStrictEqual(referenceDots[1]);

  const forthRun = getDots(8);
  expect(forthRun.leftDot).toStrictEqual(referenceDots[0]);
  expect(forthRun.rightDot).toStrictEqual(referenceDots[1]);

  const fifthRun = getDots(10);
  expect(fifthRun.leftDot).toStrictEqual(referenceDots[1]);
  expect(fifthRun.rightDot).toBeUndefined();

});
