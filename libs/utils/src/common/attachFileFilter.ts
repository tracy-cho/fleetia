type Thumbnail = {
  name: string;
  no: number;
  type?: "image" | "video";
  url: string;
  thumbnail_url?: string;
};
export const attachFileFilter = (
  files: Thumbnail[],
  isVideoActive: boolean
): Thumbnail[] => {
  const videoReview = files.find(({ type }) => type === "video");
  const photoReview = files.filter(
    ({ type, url }) => type !== "video" && !/\.heic$/.test(url)
  );

  if (isVideoActive) {
    return videoReview ? [videoReview, ...photoReview] : photoReview;
  } else {
    return photoReview;
  }
};
