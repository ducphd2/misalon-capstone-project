export const numberInputs = (
  input: object = {},
): {
  [key: string]: number;
} =>
  Object.keys(input).reduce((acc: unknown, val: string) => {
    acc[val] = +input[val] as number;
    return acc;
  }, {});
