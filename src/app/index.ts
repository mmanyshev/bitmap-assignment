
import { DistanceField } from "app/distanceField";
import { readBitmapList } from "app/readBitmapList";

readBitmapList()
  .then(
    (bitmapList) => {

      bitmapList.forEach((bitmap) => {

        const distanceField = new DistanceField(bitmap);
        distanceField.fill();

        const output = distanceField.toString();
        process.stdout.write(output);

        if (process.env.NODE_ENV !== "production") {
          process.stdout.write(distanceField.getFormmattedStats());
        }

      });

    },
    (error) => {

      console.error("Not able to process input:", error.message);
      process.exit();

    },
  )
  .catch((error) => {

    console.error("Error while processing test cases:", error.message);
    process.exit();

  });
