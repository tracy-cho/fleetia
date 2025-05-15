import { locationSearch } from "./locationSearch";

const messageEvent = {
  send: (message: any, origin?: string) =>
    window.parent.postMessage(message, origin ?? locationSearch.origin()),

  receive: (
    event: (data: { [key: string]: any }, origin?: string) => void,
    initValue?: { [key: string]: any }
  ) => {
    window.addEventListener("message", ({ data, origin }) => {
      let curData = data;

      // init value가 있을 때 data를 순회하여 initValue에 없는 Key-value는 제거해준다.
      // initialize시 undefinded는 사용하지 않는다.
      if (initValue) {
        curData = Object.keys(data).reduce(
          (a, c) =>
            Object.prototype.hasOwnProperty.call(initValue, c) &&
            data[c] !== undefined
              ? { ...a, [c]: data[c] }
              : a,
          {}
        );
      }

      if (Object.keys(curData).length > 0) {
        event(curData, origin);
      }
    });
  }
};

export { messageEvent };
