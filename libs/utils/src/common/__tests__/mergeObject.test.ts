import { mergeObject } from "../mergeObject";

describe("mergeObjectsRecursive", () => {
  test("should merge two objects with nested objects", () => {
    const obj1 = {
      aa: 1,
      bb: {
        cc: 2,
        dd: {
          ee: 3
        }
      }
    };
    const obj2 = {
      bb: {
        cc: 4,
        dd: {
          ff: 5
        }
      },
      gg: 6
    };
    const expectedResult = {
      aa: 1,
      bb: {
        cc: 4,
        dd: {
          ee: 3,
          ff: 5
        }
      },
      gg: 6
    };

    expect(mergeObject(obj1, obj2)).toEqual(expectedResult);
  });

  test("should not modify the original objects", () => {
    const obj1 = {
      aa: 1,
      bb: {
        cc: 2,
        dd: {
          ee: 3
        }
      }
    };
    const obj2 = {
      bb: {
        cc: 4,
        dd: {
          ff: 5
        }
      },
      gg: 6
    };
    const expectedObj1 = {
      aa: 1,
      bb: {
        cc: 2,
        dd: {
          ee: 3
        }
      }
    };
    const expectedObj2 = {
      bb: {
        cc: 4,
        dd: {
          ff: 5
        }
      },
      gg: 6
    };

    mergeObject(obj1, obj2);

    expect(obj1).toEqual(expectedObj1);
    expect(obj2).toEqual(expectedObj2);
  });

  test("null test", () => {
    const obj1 = {
      aa: 1,
      bb: {
        cc: 2,
        dd: {
          ee: 3
        }
      }
    };
    const obj2 = {
      bb: null,
      gg: 6
    };
    const expectedResult = {
      aa: 1,
      bb: null,
      gg: 6
    };

    expect(mergeObject(obj1, obj2)).toEqual(expectedResult);
  });
});
