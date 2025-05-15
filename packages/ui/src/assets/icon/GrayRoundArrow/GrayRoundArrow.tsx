import React from "react";
import { commonProps } from "../../../common/common.type";

function GrayRoundArrow(props: commonProps<"svg">) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={props.__dangerouslysetclassname}
    >
      <g opacity="0.4">
        <rect width="60" height="60" rx="30" fill="black" />
        <path
          d="M23.9121 21.7003L25.2621 20.4351L36.4338 30.8699L25.2621 41.3047L23.9121 40.046L33.7273 30.8699L23.9121 21.7003Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

export { GrayRoundArrow };
