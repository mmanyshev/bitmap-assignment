
export async function readNumberLine(rl: AsyncIterator<string>): Promise<number[]> {

  const { value: line } = await rl.next();
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
