/**
 * @description html을 정제하는 함수
 */
export const clearHtml = {
  removeStyleTag: (html: string) =>
    html?.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ""),
  removeInlineStyle: (html: string) =>
    clearHtml
      .removeStyleTag(html)
      ?.replace(/\sstyle\s?=\s?['"][^"']*['"]/g, ""),
  removeTag: (html: string) =>
    clearHtml
      .removeStyleTag(html)
      ?.replace(
        /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/gi,
        ""
      ),
  replaceReturnToBr: (html: string) =>
    clearHtml.removeStyleTag(html)?.replace(/(\n|\r\n|\\n|\\r\\n)/g, "<br />"),
  removeTagWithOutBr: (html: string) =>
    clearHtml.removeStyleTag(html)?.replace(/<(?!br\s*\/?)[^>]+>/gi, "")
};
