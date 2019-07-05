
import { Bitmap } from "./bitmap";
import { DistanceField } from "./distanceField";

export type ProcessBitmapWorkerResult = {

  field: string;
  stats: string;

};

export function processBitmap(
  bitmap: Bitmap,
  callback: NodeLikeCallback<any>,
) {

  const distanceField =
    new DistanceField(bitmap);

  distanceField.fill();

  const result: ProcessBitmapWorkerResult = {

    field: distanceField.toString(),
    stats: distanceField.getFormmattedStats(),

  };

  callback(null, result);

}
