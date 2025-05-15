import React from "react";
import classNames from "classnames/bind";

import styles from "./RoundArrow.module.scss";

type RoundArrowProps = {
  ctx?: any;
  onClick?: any;
};

const cx = classNames.bind(styles);

export const RoundArrow: React.FC<RoundArrowProps> = ({ ctx, onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("RoundArrow", ctx)}
      onClick={e => onClick(e)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C18.623 0 24 5.377 24 12C24 18.623 18.623 24 12 24C5.377 24 0 18.623 0 12C0 5.377 5.377 0 12 0ZM12 1C18.071 1 23 5.929 23 12C23 18.071 18.071 23 12 23C5.929 23 1 18.071 1 12C1 5.929 5.929 1 12 1ZM9 6.753L15.44 12L9 17.263L9.678 18L17 12L9.665 6L9 6.753V6.753Z"
        fill="white"
      />
    </svg>
  );
};
