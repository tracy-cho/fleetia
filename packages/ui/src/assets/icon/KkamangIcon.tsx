import React from "react";
import { commonPropsWithChildren } from "../../common/common.type";

type KkamangIconProps = {
  size: number;
} & commonPropsWithChildren<"svg">;

function KkamangIcon({ size }: KkamangIconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zoom: size / 40 }}
    >
      <circle cx="20" cy="20" r="19.5" fill="#CDCDCD" stroke="#CDCDCD" />
      <path
        d="M19.9997 19.9998C19.9997 22.9454 17.6119 25.3332 14.6663 25.3332C11.7208 25.3332 9.33301 22.9454 9.33301 19.9998C9.33301 17.0543 11.7208 14.6665 14.6663 14.6665C17.6119 14.6665 19.9997 17.0543 19.9997 19.9998Z"
        fill="white"
      />
      <ellipse cx="12.5" cy="20.833" rx="2.5" ry="2.5" fill="#CDCDCD" />
      <path
        d="M30.6667 19.9998C30.6667 22.9454 28.2789 25.3332 25.3333 25.3332C22.3878 25.3332 20 22.9454 20 19.9998C20 17.0543 22.3878 14.6665 25.3333 14.6665C28.2789 14.6665 30.6667 17.0543 30.6667 19.9998Z"
        fill="white"
      />
      <ellipse cx="22.5" cy="20.833" rx="2.5" ry="2.5" fill="#CDCDCD" />
    </svg>
  );
}

export { KkamangIcon };
