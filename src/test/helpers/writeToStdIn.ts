
function nextTick() {

  return new Promise((resolve) => {
    process.nextTick(resolve);
  });

}

export async function writeToStdIn(stdin: any, input: string[]): Promise<void> {

  for (let i = 0; i !== input.length; i += 1) {

    await nextTick();
    stdin.send(`${input[i]}\n`);

  }

  stdin.end();

}
