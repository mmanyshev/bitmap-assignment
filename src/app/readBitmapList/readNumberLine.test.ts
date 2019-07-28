
import readline from "readline";
import mockStdIn from "mock-stdin";

import { writeToStdIn } from "test/helpers/writeToStdIn";
import { readNumberLine } from "./readNumberLine";

let stdin: any;

beforeEach(() => {
  stdin = mockStdIn.stdin();
});

afterEach(() => {
  stdin.restore();
});

test("it return empty array when empty/spaces input", async () => {

  const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

  });
  const rlIterator = rl[Symbol.asyncIterator]();

  writeToStdIn(stdin, ["    "]);

  const line = await readNumberLine(rlIterator);
  expect(line).toStrictEqual([]);

});

test("it can read single number", async () => {

  const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

  });
  const rlIterator = rl[Symbol.asyncIterator]();

  writeToStdIn(stdin, ["4"]);

  const line = await readNumberLine(rlIterator);
  expect(line).toStrictEqual([4]);

});

test("it can read multiple numbers", async () => {

  const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

  });
  const rlIterator = rl[Symbol.asyncIterator]();

  writeToStdIn(stdin, ["4 5 6 8 7 2"]);

  const line = await readNumberLine(rlIterator);
  expect(line).toStrictEqual([4, 5, 6, 8, 7, 2]);

});

test("it should skip additional spaces", async () => {

  const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

  });
  const rlIterator = rl[Symbol.asyncIterator]();

  writeToStdIn(stdin, ["     4   5      "]);

  const line = await readNumberLine(rlIterator);
  expect(line).toStrictEqual([4, 5]);

});

test("it should throw on non number values", async () => {

  const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

  });
  const rlIterator = rl[Symbol.asyncIterator]();

  writeToStdIn(stdin, ["     4  fdfd  5      "]);

  await expect(readNumberLine(rlIterator))
    .rejects.toThrow("Failed to parse numeric value");

});
