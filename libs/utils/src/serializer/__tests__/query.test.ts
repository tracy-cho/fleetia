import { query } from "../query";

describe("query", () => {
  it("should return correct state and data when isSuccess is true", () => {
    const testData = { foo: "bar" };
    const resultData = { foo: "result" };
    const result = query(
      {
        isLoading: false,
        isError: false,
        isSuccess: true,
        fetchStatus: "idle",
        data: resultData
      },
      testData
    );
    expect(result).toEqual({
      data: resultData,
      state: "hasValue"
    });
  });

  it("should return correct state and initialData when isLoading is true", () => {
    const testData = { foo: "bar" };
    const resultData = { foo: "result" };
    const result = query(
      {
        isLoading: true,
        isError: false,
        isSuccess: false,
        fetchStatus: "fetching",
        data: resultData
      },
      testData
    );
    expect(result).toEqual({
      data: testData,
      state: "loading"
    });
  });

  it("should return correct state and initialData when isError is true", () => {
    const testData = { foo: "bar" };
    const resultData = { foo: "result" };
    const result = query(
      {
        isLoading: false,
        isError: true,
        isSuccess: false,
        fetchStatus: "paused",
        data: resultData
      },
      testData
    );
    expect(result).toEqual({
      data: testData,
      state: "hasError"
    });
  });

  it("should return correct state and initialData when all flags are false", () => {
    const testData = { foo: "bar" };
    const resultData = { foo: "result" };
    const result = query(
      {
        isLoading: false,
        isError: false,
        isSuccess: false,
        fetchStatus: "paused",
        data: resultData
      },
      testData
    );
    expect(result).toEqual({
      data: testData,
      state: "idle"
    });
  });

  it("should return correct state and initialData when isSuccess is true,fetchStatus is fetching", () => {
    const testData = { foo: "bar" };
    const resultData = { foo: "result" };
    const result = query(
      {
        isLoading: false,
        isError: false,
        isSuccess: true,
        fetchStatus: "fetching",
        data: resultData
      },
      testData
    );
    expect(result).toEqual({
      data: testData,
      state: "loading"
    });
  });
});
