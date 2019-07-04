
import { Dot } from "app/dot";
import { Bitmap } from "app/bitmap";

import { Field } from "./field";

test("Field derived classes inherit toString()", () => {

  class CustomField extends Field<Dot> {

    public readonly rows: Dot[][];

    constructor(bitmap: Bitmap) {

      super(bitmap);

      this.rows = bitmap.data.map(
        (row, y) =>
          row.map((value, x) => new Dot(x, y)),
      );

    }

    fill = () => {};

  }

  const bitmap: Bitmap = {

    width: 2,
    height: 1,

    data: [[0, 1]],

  };

  const customField = new CustomField(bitmap);
  expect(customField.toString()).toBe("{0,0} {1,0}\n");

});
