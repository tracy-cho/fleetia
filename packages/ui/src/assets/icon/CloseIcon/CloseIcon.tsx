import React from "react";
import classNames from "classnames/bind";

import styles from "./CloseIcon.module.scss";

type CloseIconProps = {
  onClick?: any;
  big?: boolean;
  size?: "big" | "small";
  ctx?: string;
};

const cx = classNames.bind(styles);

const CloseIcon: React.FC<CloseIconProps> = ({
  onClick,
  big = false,
  size,
  ctx
}) => {
  const iconSize = size === "small" ? 9 : big ? 30 : 14;
  return (
    <svg
      onClick={onClick}
      className={cx("CloseIcon", onClick ? "isClick" : "", ctx)}
      width={iconSize}
      height={iconSize}
      viewBox={`0 0 ${iconSize + 2} ${iconSize + 2}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M1 1L${iconSize} ${iconSize}`}
        stroke="#9A9A9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M1 ${iconSize}L${iconSize} 1`}
        stroke="#9A9A9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { CloseIcon };
