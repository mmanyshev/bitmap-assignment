
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

  expect(bitmap.length).toBe(1);

  bitmap.forEach((row) => {
    expect(row.length).toBe(2);
  });

  expect(bitmap).toStrictEqual([[0, 1]]);

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

  expect(bitmap1.length).toBe(1);
  bitmap1.forEach((row) => {
    expect(row.length).toBe(2);
  });

  expect(bitmap1).toStrictEqual([[0, 1]]);

  expect(bitmap2.length).toBe(2);
  bitmap2.forEach((row) => {
    expect(row.length).toBe(2);
  });

  expect(bitmap2).toStrictEqual([[0, 0], [0, 1]]);

  expect(bitmap3.length).toBe(3);
  bitmap3.forEach((row) => {
    expect(row.length).toBe(3);
  });

  expect(bitmap3).toStrictEqual([[1, 0, 0], [0, 1, 0], [0, 0, 0]]);

});
