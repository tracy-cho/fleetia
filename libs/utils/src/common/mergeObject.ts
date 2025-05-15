type mergeObjectType = <T extends { [key: string]: any }>(
  originalObject: T,
  addObject: { [key: string]: any }
) => T;

export const mergeObject: mergeObjectType = <T extends { [key: string]: any }>(
  originalObject: T,
  addObject: { [key: string]: any }
): T =>
  Object.entries(addObject).reduce(
    (result, [key, value]) => {
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // @ts-ignore
        result[key] = mergeObject(result[key] ?? {}, value);
      } else {
        // @ts-ignore
        result[key] = value;
      }
      return result;
    },
    { ...originalObject }
  ) as T;
