import { proper } from "../proper";

describe("proper", () => {
  it("should return a string with the first letter capitalized", () => {
    const result = proper("hello");
    expect(result).toEqual("Hello");
  });
  it("empty text", () => {
    const result = proper("");
    expect(result).toEqual("");
  });
  it("text exception", () => {
    // @ts-ignore
    // 강제 에러 발생
    const result = proper(null);
    expect(result).toEqual("");
  });
});
