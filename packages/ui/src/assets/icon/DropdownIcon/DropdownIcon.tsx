import React from "react";
import classNames from "classnames/bind";

import styles from "./DropdownIcon.module.scss";

type DropdownIconProps = {};

const cx = classNames.bind(styles);

export const DropdownIcon: React.FC<DropdownIconProps> = () => {
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("DropdownIcon")}
    >
      <path
        d="M13.1513 0L14 0.905625L7 8.4L0 0.905625L0.844375 0L7 6.58437L13.1513 0Z"
        fill="#9A9A9A"
      />
    </svg>
  );
};
