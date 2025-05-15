import React from "react";
import classNames from "classnames/bind";

import styles from "./AngleBracket.module.scss";

type AngleBracketProps = {
  ctx?: any;
  onClick?: any;
};

const cx = classNames.bind(styles);

export const AngleBracket: React.FC<AngleBracketProps> = ({ ctx, onClick }) => {
  return (
    <svg
      width="34"
      height="50"
      viewBox="0 0 34 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("AngleBracket", ctx)}
      onClick={e => onClick(e)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.6668 1.57292L3.721 25L33.6668 48.3729L32.3772 50L0.333496 25L32.3981 0L33.6668 1.57292Z"
        fill="#9A9A9A"
      />
    </svg>
  );
};
