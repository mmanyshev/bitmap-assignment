
import { Bitmap } from "app/bitmap";
import { DistanceField } from "app/distanceField";
// import { readBitmapList } from "app/readBitmapList";

// const bitmapList = readBitmapList();

const testBitmap: Bitmap = {

  width: 4,
  height: 3,

  data: [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
  ],

};

const distanceField = new DistanceField(testBitmap);
distanceField.fill();

const output = distanceField.toString();
process.stdout.write(output);

if (process.env.NODE_ENV !== "production") {
  process.stdout.write(distanceField.getFormmattedStats());
}
