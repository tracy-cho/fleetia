import React from "react";
import classNames from "classnames/bind";

import styles from "./NaverIcon.module.scss";

const cx = classNames.bind(styles);

type NaverIconType = {
  type: "default" | "white";
  size?: number;
};

function NaverIcon({ type = "default", size = 40 }: NaverIconType) {
  return (
    <>
      {type === "default" && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zoom: size / 40 }}
        >
          <g clipPath="url(#clip0_5496_25552)">
            <path
              d="M10.8207 10H29.1822C29.634 10 30.0029 10.3686 30.0029 10.82V29.18C30.0029 29.6314 29.634 30 29.1822 30H10.8207C10.3689 30 10 29.6314 10 29.18V10.82C10 10.3657 10.366 10 10.8207 10Z"
              fill="#00C300"
            />
            <path
              d="M21.5956 20.3143L18.2728 15.54H15.5161V24.46H18.4043V19.6858L21.7272 24.46H24.4867V15.54H21.5956V20.3143Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_5496_25552">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(10 10)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "white" && (
        <svg
          className={cx("shadow")}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zoom: size / 40 }}
        >
          <g clipPath="url(#clip0_5496_25556)">
            <path d="M10 10V30H30V10H10ZM29 29H11V11H29V29Z" fill="white" />
            <path
              d="M18.3667 19.8333L21.6 24.5667H25V15.4333H21.6333V20.1667L18.4333 15.4333H15V24.5667H18.3667V19.8333Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_5496_25556">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(10 10)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
}

export { NaverIcon };
