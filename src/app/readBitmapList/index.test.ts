
import mockStdIn from "mock-stdin";

import { writeToStdIn } from "test/helpers/writeToStdIn";
import { readBitmapList } from ".";

let stdin: any;

beforeEach(() => {
  stdin = mockStdIn.stdin();
});

afterEach(() => {
  stdin.restore();
});

test("reads single task", async () => {

  writeToStdIn(
    stdin,
    [
      "1",
      "1 2",
      "0 1",
    ],
  );

  const [bitmap] = await readBitmapList();

  expect(bitmap.width).toBe(2);
  expect(bitmap.height).toBe(1);
  expect(bitmap.data).toStrictEqual([[0, 1]]);

});

test("reads multiple task", async () => {

  writeToStdIn(
    stdin,
    [
      "3",
      "1 2",
      "0 1",
      "",
      "2 2",
      "0 0",
      "0 1",
      "",
      "3 3",
      "1 0 0",
      "0 1 0",
      "0 0 0",
    ],
  );

  const [
    bitmap1,
    bitmap2,
    bitmap3,
  ] = await readBitmapList();

  expect(bitmap1.width).toBe(2);
  expect(bitmap1.height).toBe(1);
  expect(bitmap1.data).toStrictEqual([[0, 1]]);

  expect(bitmap2.width).toBe(2);
  expect(bitmap2.height).toBe(2);
  expect(bitmap2.data).toStrictEqual([[0, 0], [0, 1]]);

  expect(bitmap3.width).toBe(3);
  expect(bitmap3.height).toBe(3);
  expect(bitmap3.data).toStrictEqual([[1, 0, 0], [0, 1, 0], [0, 0, 0]]);

});
