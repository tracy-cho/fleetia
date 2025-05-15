/* eslint-disable */
const replaceObjectText = {
  getString: (
    data: {
      [key: string]: string | number;
      template: string;
    },
    option?: {
      returnType?: "string" | "element"; // 리턴 타입 (default: element)
      element?: string; // 뽑아낼 때 어떤걸로 뽑아내느냐 (default: span)
    }
  ): string =>
    Object.keys(data).reduce(
      (accm, curr) =>
        accm.replace(
          new RegExp(`([$#])\\{${curr}\\}`, ``),
          option?.returnType === "string"
            ? `${data[curr]}`
            : `<${option?.element ?? "span"}>${data[curr]}</${
                option?.element ?? "span"
              }>`
        ),
      data.template
    ),
  getObject(
    data: { [key: string]: string | number; template: string }[]
  ): string {
    return data.reduce((a, c) => `${a}<div>${this.getString(c)}</div>`, "");
  }
};

export { replaceObjectText };
