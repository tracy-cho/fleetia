import dayjs from "dayjs";
import { Console } from "../wrapper/Console";

/**
 * 가장 일반적으로 쓰는 형태(YYYY.MM.DD)로 포맷팅 해 주는 함수입니다.
 *
 * @tracy-cho
 * @param date
 */
const formattedDate = (date: string | undefined | null): string => {
  if (!date) {
    return "";
  }
  const text = dayjs(date).format("YYYY.MM.DD");
  if (text.toLowerCase() === "invalid date") {
    Console.error("Invalid Date");
    return "";
  }
  return text;
};
export { formattedDate };
