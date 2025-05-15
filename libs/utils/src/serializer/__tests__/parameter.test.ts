import { parameter } from "../parameter";

describe("parameter", () => {
  describe("getPage", () => {
    it("should calculate page correctly with given parameters", () => {
      const testParam = {
        page: 2,
        offset: 20,
        limit: 10,
        start: "2023-01-01",
        end: "2023-01-31",
        otherParam: "value"
      };

      const pageParam = parameter.getPage(testParam);
      expect(pageParam).toEqual({
        page: 2,
        start: "2023-01-01",
        end: "2023-01-31",
        otherParam: "value"
      });
    });

    it("should set default values if necessary parameters are missing", () => {
      const testParam = {
        start: "2023-01-01",
        end: "2023-01-31"
      };

      const pageParam = parameter.getPage(testParam);
      expect(pageParam).toEqual({
        start: "2023-01-01",
        end: "2023-01-31",
        page: 1
      });
    });
  });

  describe("getInfinity", () => {
    it("should calculate offset and limit correctly with given parameters", () => {
      const testParam = {
        page: 2,
        offset: 20,
        limit: 10,
        start: "2023-01-01",
        end: "2023-01-31",
        otherParam: "value"
      };

      const infinityParam = parameter.getInfinity(testParam);
      expect(infinityParam).toEqual({
        limit: 10,
        offset: 20,
        otherParam: "value"
      });
    });

    it("should set default values if necessary parameters are missing", () => {
      const testParam = {
        start: "2023-01-01",
        end: "2023-01-31"
      };

      const infinityParam = parameter.getInfinity(testParam);
      expect(infinityParam).toEqual({
        limit: 6,
        offset: 0
      });
    });
  });
});
