import { replaceObjectText } from "../replaceObjectText";

const curStr = [
  {
    top: 1,
    template: "#{ratio} 고객이 이 제품을 #{copywrite}고 생각하고 있어요!",
    ratio: "정말 많은",
    copywrite: "사이즈가 적당하다"
  },
  {
    top: 2,
    template: "#{ratio} 고객이 #{copywrite} 제품이라고 생각하고 있어요!",
    ratio: "대부분의",
    copywrite: "핏이 딱 예쁜"
  },
  {
    top: 3,
    template: "#{ratio} 고객이 #{copywrite} 제품이라고 생각하고 있어요!",
    ratio: "정말 많은",
    copywrite: "입자마자 딱 이거다 싶은"
  }
];

test("return span", () => {
  expect(replaceObjectText.getString(curStr[0])).toBe(
    "<span>정말 많은</span> 고객이 이 제품을 <span>사이즈가 적당하다</span>고 생각하고 있어요!"
  );
});

test("return string", () => {
  expect(replaceObjectText.getString(curStr[0], { returnType: "string" })).toBe(
    "정말 많은 고객이 이 제품을 사이즈가 적당하다고 생각하고 있어요!"
  );
});
test("return div", () => {
  expect(
    replaceObjectText.getString(curStr[0], {
      returnType: "element",
      element: "div"
    })
  ).toBe(
    "<div>정말 많은</div> 고객이 이 제품을 <div>사이즈가 적당하다</div>고 생각하고 있어요!"
  );
});

test("object string", () => {
  expect(replaceObjectText.getObject(curStr)).toBe(
    "<div><span>정말 많은</span> 고객이 이 제품을 <span>사이즈가 적당하다</span>고 생각하고 있어요!</div>" +
      "<div><span>대부분의</span> 고객이 <span>핏이 딱 예쁜</span> 제품이라고 생각하고 있어요!</div>" +
      "<div><span>정말 많은</span> 고객이 <span>입자마자 딱 이거다 싶은</span> 제품이라고 생각하고 있어요!</div>"
  );
});
