import React from "react";
import { commonProps } from "../../../common/common.type";

function WhiteCloseIcon(props: commonProps<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={props.__dangerouslysetclassname}
    >
      <rect width="24" height="24" rx="12" fill="white" />
      <path
        d="M6.85718 6.85718L17.1429 17.1429"
        stroke="#9A9A9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.85718 17.1428L17.1429 6.85711"
        stroke="#9A9A9A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { WhiteCloseIcon };
