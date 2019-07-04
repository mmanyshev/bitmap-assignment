
export function validateRange(

  value: number,
  minValue: number,
  maxValue: number,

  rangeName: string = "Value",

): void {

  if (value >= minValue && value <= maxValue) {
    return;
  }

  const errorMessage = `${rangeName} expected to be in ${minValue}..${maxValue} range`;
  throw new RangeError(errorMessage);

}
