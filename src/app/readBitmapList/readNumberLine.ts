
import { once } from "events";
import readline from "readline";

export async function readNumberLine(rl: readline.Interface): Promise<number[]> {

  rl.prompt();

  const line = await once(rl, "line");
  const preparedLine = line.toString().replace(/\s+/g, " ").trim();

  if (!preparedLine.length) {
    return [];
  }

  return preparedLine.split(" ").map((chunk) => {

    const parsedNumber = parseInt(chunk.trim(), 10);

    if (isNaN(parsedNumber)) {
      throw new TypeError("Failed to parse numeric value");
    }

    return parsedNumber;

  });

}
