
import { TEST_CASE_AMOUNT, bitmapGenerator } from "./stress";

async function generateStressFile() {

  process.stdout.write(`${TEST_CASE_AMOUNT}\n`);

  for await (const bitmap of bitmapGenerator()) {

    process.stdout.write(`${bitmap.height} ${bitmap.width}\n`);

    bitmap.data.forEach((row) => {
      process.stdout.write(`${row.join(" ")}\n`);
    });

    process.stdout.write(`\n`);

  }

}

generateStressFile();
