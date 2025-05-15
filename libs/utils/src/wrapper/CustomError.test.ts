import { TokenError } from "./CustomError";

test("description", () => {
  const t = () => {
    throw new TokenError("test");
  };
  expect(t).toThrow(TokenError);
});
