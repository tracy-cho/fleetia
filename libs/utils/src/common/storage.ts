export const storage = {
  /**
   * array 형태 텍스트를 배열로 변경해준다.
   * @param key : localStorage key
   */
  getArray: (key: string) =>
    localStorage.getItem(key)?.match(/[\w-_]+/gi) ?? [],
  /**
   * 배열을 array 형태 텍스트로 변경해 localStorage 에 저장한다.
   * @param key  : localStorage key
   * @param value : 저장할 값
   */
  saveArray: (key: string, value: string | string[]) => {
    const arr = storage.getArray(key);
    if (typeof value === "string") {
      arr.push(value);
    } else {
      arr.push(...value);
    }
    localStorage.setItem(
      key,
      `["${arr
        .filter((item, index) => arr.indexOf(item) === index)
        .join(`","`)}"]`
    );
  }
};
