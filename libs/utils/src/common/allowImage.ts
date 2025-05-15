type listType =
  | string[]
  | {
      imageKey: string;
      list: { [key: string]: any }[];
    };

/**
 * img태그에서 사용 할 수 없는 이미지 url을 제거하는 함수입니다. allow하는 url이 아닌 경우에는 전부 없애고 Return하도록 되어있습니다. url 외의 object가 섞여있는 케이스는
 * 없다는 가정 하에 작성되어있으므로, 필요하다면 해당 요소도 return할 수 있도록 param을 추가 해 주세요.
 * @param list list가 string array인 경우에는 모든 요소가 url이라고 가정하며, object인 경우에는 imageKey에 해당되는 key의 값이 url이라고 가정합니다.
 */

const extensions = ["apng", "avif", "gif", "jpeg", "jpg", "png", "svg"];
const regex = new RegExp(`\\b(${extensions.join("|")})\\b`, "g");
const allowImage = (param: listType): any[] => {
  if (Array.isArray(param)) {
    return param.filter(i =>
      i.replace(/\?+$/gi, "").toLowerCase().match(regex)
    );
  } else {
    return param.list.filter(i =>
      i[param.imageKey]?.replace(/\?+$/gi, "").toLowerCase().match(regex)
    );
  }
};

export { allowImage };
