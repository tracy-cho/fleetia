import { formattedDate } from "../index";

test("formattedDate", () => {
  expect(formattedDate("2019-01-01")).toBe("2019.01.01");
  expect(formattedDate("error")).toBe("");
});
