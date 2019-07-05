
import { Bitmap } from "./bitmap";
import { DistanceField } from "./distanceField";

export function processBitmap(
  bitmap: Bitmap,
  callback: (err: Error | null, data: any) => void,
) {

  const distanceField = new DistanceField(bitmap);
  distanceField.fill();

  callback(null, {

    pid: process.pid,

    field: distanceField.toString(),
    summary: distanceField.getFormmattedStats(),

  });

}
