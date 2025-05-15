import React from "react";
import { commonProps } from "../../common/common.type";

function AddIcon({ ...props }: commonProps<"svg">) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="15" cy="15" r="14.5" fill="#CDCDCD" stroke="#CDCDCD" />
      <path
        d="M14.8594 16.2031H11.8438V14.9375H14.8594V11.9219H16.125V14.9375H19.1562V16.2031H16.125V19.2344H14.8594V16.2031Z"
        fill="white"
      />
    </svg>
  );
}

export { AddIcon };
