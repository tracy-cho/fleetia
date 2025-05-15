import React from "react";
import classNames from "classnames/bind";

import styles from "./FillNRoundedArrow.module.scss";

type FillNRoundedArrowProps = {
  onClick?: any;
  ctx?: any;
  fill?: string;
  path?: string;
};

const cx = classNames.bind(styles);

export const FillNRoundedArrow: React.FC<FillNRoundedArrowProps> = ({
  onClick,
  fill,
  ctx,
  path
}) => {
  return (
    <svg
      className={cx("FillNRoundedArrow", ctx)}
      onClick={() => onClick()}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="14" fill={fill ?? "#F7F7F7"} />
      <path
        d="M15.7071 10.7071C16.0976 10.3166 16.0976 9.68342 15.7071 9.29289C15.3166 8.90237 14.6834 8.90237 14.2929 9.29289L15.7071 10.7071ZM11 14L10.2929 13.2929L9.58579 14L10.2929 14.7071L11 14ZM14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L14.2929 18.7071ZM14.2929 9.29289L10.2929 13.2929L11.7071 14.7071L15.7071 10.7071L14.2929 9.29289ZM10.2929 14.7071L14.2929 18.7071L15.7071 17.2929L11.7071 13.2929L10.2929 14.7071Z"
        fill={path ?? "black"}
      />
    </svg>
  );
};
