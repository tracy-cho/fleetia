import { formatRange } from "../formatRange";
import dayjs from "dayjs";

describe("formatRange", () => {
  it("기본적인 변환 수행", () => {
    const result = formatRange({
      range: { start: dayjs("2021-08-01"), end: dayjs("2021-08-31") }
    });
    expect(result).toEqual({
      range: { start: "2021-08-01", end: "2021-08-31" }
    });
  });
});
