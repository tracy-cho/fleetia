import React from "react";
import classNames from "classnames/bind";

import styles from "./AccountIcon.module.scss";

export type AccountIconProps = {
  ctx?: any;
  onClick?: any;
};

const cx = classNames.bind(styles);

export const AccountIcon: React.FC<AccountIconProps> = ({ onClick, ctx }) => {
  return (
    <svg
      className={cx("AccountIcon", ctx)}
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.842 5.945a7 7 0 1 0-9.684 10.11 7 7 0 0 0 9.684-10.11zm.135 8.406a6 6 0 1 0-9.955 0c.592-1.599 1.41-3.041 4.976-3.041a2.41 2.41 0 1 1 .004 0c3.555 0 4.383 1.442 4.975 3.041z"
        fill="#111"
        fillOpacity=".8"
      />
    </svg>
  );
};
