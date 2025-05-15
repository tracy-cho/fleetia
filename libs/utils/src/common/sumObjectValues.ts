const sumObjectValues = (object: { [key: string]: number }) =>
  Object.values(object).reduce((accm, curr) => accm + curr, 0);

export { sumObjectValues };
