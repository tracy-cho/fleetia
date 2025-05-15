import React from "react";
import classNames from "classnames/bind";

import styles from "./WhiteRoundArrow.module.scss";

const cx = classNames.bind(styles);

function WhiteRoundArrow({ ctx }: { ctx?: string }) {
  return (
    <svg
      className={cx("WhiteRoundArrow", ctx)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C18.623 0 24 5.377 24 12C24 18.623 18.623 24 12 24C5.377 24 0 18.623 0 12C0 5.377 5.377 0 12 0ZM13.5858 12L9.29289 7.70711L10.7071 6.29289L15.7071 11.2929L16.4142 12L15.7071 12.7071L10.7071 17.7071L9.29289 16.2929L13.5858 12Z"
        fill="white"
        fillOpacity="0.8"
      />
    </svg>
  );
}

export { WhiteRoundArrow };
