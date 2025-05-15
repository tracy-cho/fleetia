import { clearHtml } from "../clearHtml";

describe("clearHtml", () => {
  describe("removeInlineStyle", () => {
    it("should remove inline style from html string", () => {
      const html = `<div style="color: red;">Hello</div>`;
      const result = clearHtml.removeInlineStyle(html);
      expect(result).toEqual("<div>Hello</div>");
    });
  });

  describe("removeTag", () => {
    it("should remove all tags from html string", () => {
      const html = `<div>Hello</div>`;
      const result = clearHtml.removeTag(html);
      expect(result).toEqual("Hello");
    });

    it("remove style tag from html string", () => {
      // 실제 케이스를 테스트에 넣었습니다.
      const html = `<style css="" type="">p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px ''Helvetica Neue''} p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px ''Apple SD Gothic Neo''} span.s1 {font: 13.0px ''Helvetica Neue''}</style><p><span style="font-family: Dotum, sans-serif; font-size: 12px;">마감이 깔끔하고 튼튼해서 이 가격에 팔아도 되는지 만족스러운 제품입니다.<br/>색상이 블랙이라 어떤 상의에서도 잘 어울려서 자주 입을 것 같네요~</span></p>`;
      const result = clearHtml.removeTag(html);
      expect(result).toEqual(
        `마감이 깔끔하고 튼튼해서 이 가격에 팔아도 되는지 만족스러운 제품입니다.색상이 블랙이라 어떤 상의에서도 잘 어울려서 자주 입을 것 같네요~`
      );
    });
  });

  describe("replaceReturnToBr", () => {
    it("should replace newline to <br />", () => {
      const html = `Hello\nWorld`;
      const result = clearHtml.replaceReturnToBr(html);
      expect(result).toEqual("Hello<br />World");
    });
    it("should replace \\n to <br />", () => {
      const html = `Hello\\nWorld`;
      const result = clearHtml.replaceReturnToBr(html);
      expect(result).toEqual("Hello<br />World");
    });
    it("should replace \r\n to <br />", () => {
      const html = `Hello\r\nWorld`;
      const result = clearHtml.replaceReturnToBr(html);
      expect(result).toEqual("Hello<br />World");
    });
  });

  describe("removeTagWithOutBr", () => {
    it("should remove all tags except <br />", () => {
      const html = `<div>Hello<br />World</div>`;
      const result = clearHtml.removeTagWithOutBr(html);
      expect(result).toEqual("Hello<br />World");
    });
  });
});
