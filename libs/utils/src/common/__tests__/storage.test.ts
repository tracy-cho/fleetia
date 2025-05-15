import { storage } from "../storage";

describe("storage", () => {
  beforeEach(() => {
    localStorage?.clear();
  });

  it("should return an empty array when key is not found", () => {
    expect(storage.getArray("not-found")).toEqual([]);
  });
  it("should return an array of strings when key is found", () => {
    localStorage.setItem("found", `["a","b","c"]`);
    expect(storage.getArray("found")).toEqual(["a", "b", "c"]);
  });
  it("should save an array of strings to localStorage", () => {
    storage.saveArray("save", ["a", "b", "c"]);
    expect(localStorage.getItem("save")).toEqual(`["a","b","c"]`);
  });
  it("should save a string to localStorage", () => {
    localStorage.setItem("save", `["a","b","c"]`);
    storage.saveArray("save", "d");
    expect(localStorage.getItem("save")).toEqual(`["a","b","c","d"]`);
  });
  it("should save a string to localStorage duplicate", () => {
    localStorage.setItem("save", `["a","b","d","c","d"]`);
    storage.saveArray("save", "d");
    expect(localStorage.getItem("save")).toEqual(`["a","b","d","c"]`);
  });
});
