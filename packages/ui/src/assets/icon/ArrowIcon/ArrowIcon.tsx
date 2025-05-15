import React from "react";
import classNames from "classnames/bind";

import styles from "./ArrowIcon.module.scss";

type ArrowIconProps = {};

const cx = classNames.bind(styles);

export const ArrowIcon: React.FC<ArrowIconProps> = () => {
  return (
    <svg
      width="19"
      height="10"
      viewBox="0 0 19 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("ArrowIcon")}
    >
      <path d="M6.10155 1.64018C6.45512 1.21591 6.39779 0.585342 5.97352 0.231778C5.54924 -0.121786 4.91868 -0.0644618 4.56511 0.359815L6.10155 1.64018ZM2 5L1.23178 4.35981L0.698292 5L1.23178 5.64018L2 5ZM4.56511 9.64018C4.91868 10.0645 5.54924 10.1218 5.97352 9.76822C6.39779 9.41466 6.45512 8.78409 6.10155 8.35982L4.56511 9.64018ZM18 6C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4L18 6ZM4.56511 0.359815L1.23178 4.35981L2.76822 5.64018L6.10155 1.64018L4.56511 0.359815ZM1.23178 5.64018L4.56511 9.64018L6.10155 8.35982L2.76822 4.35981L1.23178 5.64018ZM18 4L2 4L2 6L18 6L18 4Z" />
    </svg>
  );
};
