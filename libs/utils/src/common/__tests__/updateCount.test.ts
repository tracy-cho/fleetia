import { updateCount } from "../updateCount";

describe("updateCount function", () => {
  it("item이 이전에 없는 경우 -> 1", () => {
    const result = updateCount({
      item: 1,
      itemCount: 0,
      prevItems: [],
      currentItems: [1]
    });
    expect(result).toEqual(1);
  });

  it("item이 현재에 없는 경우 -> -1", () => {
    const result = updateCount({
      item: 1,
      itemCount: 0,
      prevItems: [1],
      currentItems: []
    });
    expect(result).toEqual(-1);
  });

  it("item이 현재와 이전 모두에 있는 경우 -> 0", () => {
    const result = updateCount({
      item: 1,
      itemCount: 1,
      prevItems: [1],
      currentItems: [1]
    });
    expect(result).toEqual(1);
  });

  it("item이 현재와 이전 모두에 없는 경우 -> 0", () => {
    const result = updateCount({
      item: 1,
      itemCount: 0,
      prevItems: [],
      currentItems: []
    });
    expect(result).toEqual(0);
  });
});
