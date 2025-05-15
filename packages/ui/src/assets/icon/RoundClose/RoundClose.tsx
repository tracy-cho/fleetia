import React from "react";
import classNames from "classnames/bind";

import { commonProps } from "../../../common/common.type";

import styles from "./RoundClose.module.scss";

const cx = classNames.bind(styles);

type RoundCloseProps = commonProps<"svg"> & {
  ctx?: any;
  size?: number;
};

export const RoundClose: React.FC<RoundCloseProps> = ({
  ctx,
  size = 18,
  ...props
}) => {
  return (
    <svg
      className={cx("RoundClose", ctx)}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ zoom: size / 18 }}
    >
      <rect width="18" height="18" rx="9" fill="#E8E8E8" />
      <path
        d="M6.85742 6.85715L11.1431 11.1429"
        stroke="#9A9A9A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.85742 11.1429L11.1431 6.85715"
        stroke="#9A9A9A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
