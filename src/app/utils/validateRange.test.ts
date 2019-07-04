
import { validateRange } from "./validateRange";

test("it not throws when value is within provided range", () => {

  expect(() => validateRange(10, 0, 15)).not.toThrowError();
  expect(() => validateRange(-10, -15, 15)).not.toThrowError();

});

test("it throws when value is out of range provided", () => {
  expect(() => validateRange(10, 0, 2)).toThrowError();
});

test("it uses optional valueName in error message if provided", () => {

  expect(() => validateRange(10, 0, 2)).toThrowError("Value");
  expect(() => validateRange(10, 0, 2, "Bitmap length")).toThrowError("Bitmap length");

});
