import dayjs from "dayjs";

/**
 * dayjs로 range가 오면 이걸 param에 사용하기 좋게 format해서 돌려보내주는 함수.
 * @param range
 */
const formatRange = ({
  range
}: {
  range: { start?: dayjs.Dayjs; end?: dayjs.Dayjs };
}): {
  range: { start?: string; end?: string };
} => ({
  range: {
    start: range.start?.format("YYYY-MM-DD"),
    end: range.end?.format("YYYY-MM-DD")
  }
});
export { formatRange };
