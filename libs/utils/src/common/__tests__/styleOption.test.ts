import { styleOption } from "../styleOption";

const option = {
  shadow: true,
  "no-opt": false,
  number: 0,
  number2: 2,
  string: "string"
};

const props_1 = "props";

const props_2 = {
  value: props_1,
  option
};

test("오브젝트를 적절히 cx에 넣을 수 있게 array형태로 만들어줍니다.", () => {
  expect(styleOption.option(option)).toEqual([
    "shadow",
    "number-0",
    "number2-2",
    "string-string"
  ]);
});
test("string props를 각각의 형태로 반환 해 줍니다.", () => {
  expect(styleOption.converter(props_1)).toEqual({
    value: "props",
    option: {}
  });
});

test("default value가 있는 경우", () => {
  expect(styleOption.converter(props_2, { default: "default" })).toEqual({
    value: "props",
    option: {
      shadow: true,
      "no-opt": false,
      number: 0,
      number2: 2,
      string: "string",
      default: "default"
    }
  });
});
