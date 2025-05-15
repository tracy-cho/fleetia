import React, { SVGAttributes } from "react";

type CheckIconProps = SVGAttributes<SVGElement>;

function CheckIcon(props: CheckIconProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M50.0003 95.8334C75.3134 95.8334 95.8337 75.3131 95.8337 50.0001C95.8337 24.687 75.3134 4.16675 50.0003 4.16675C24.6873 4.16675 4.16699 24.687 4.16699 50.0001C4.16699 75.3131 24.6873 95.8334 50.0003 95.8334Z"
        fill="url(#paint0_linear_4157_14678)"
      />
      <path
        d="M41.6662 70.8333C40.5613 70.8331 39.5016 70.3939 38.7204 69.6125L26.2204 57.1125C25.4614 56.3266 25.0414 55.2741 25.0509 54.1816C25.0604 53.0892 25.4986 52.0441 26.2712 51.2716C27.0437 50.499 28.0888 50.0608 29.1812 50.0513C30.2737 50.0419 31.3262 50.4618 32.1121 51.2208L41.6662 60.775L67.8871 34.5542C68.6729 33.7952 69.7254 33.3752 70.8179 33.3847C71.9104 33.3942 72.9555 33.8324 73.728 34.6049C74.5005 35.3774 74.9387 36.4225 74.9482 37.515C74.9577 38.6075 74.5377 39.66 73.7787 40.4458L44.6121 69.6125C43.8309 70.3939 42.7712 70.8331 41.6662 70.8333Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4157_14678"
          x1="50.0003"
          y1="3.98758"
          x2="50.0003"
          y2="95.6542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4BA4F8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#4BA4F8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { CheckIcon };
