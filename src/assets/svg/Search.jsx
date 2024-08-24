import * as React from "react";
const SvgComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="none">
    <path
      fill="url(#a)"
      d="M20.71 19.29 17 15.61A9 9 0 1 0 15.61 17l3.68 3.68a1.002 1.002 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.979}
        x2={24.429}
        y1={0.979}
        y2={15.376}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F9FF" />
        <stop offset={1} stopColor="#F1F0FF" />
      </linearGradient>
    </defs>
  </svg>
);
export { SvgComponent as Search };
