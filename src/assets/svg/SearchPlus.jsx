import * as React from "react";
const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    className="mx-auto"
  >
    <path
      fill="#2F1AC4"
      d="M9.375 6.25H7.5V4.375a.625.625 0 1 0-1.25 0V6.25H4.375a.625.625 0 0 0 0 1.25H6.25v1.875a.625.625 0 0 0 1.25 0V7.5h1.875a.625.625 0 0 0 0-1.25Zm4.194 6.431-2.319-2.3a5.625 5.625 0 1 0-.869.869l2.3 2.3a.624.624 0 0 0 .888 0 .625.625 0 0 0 0-.869ZM6.875 11.25a4.375 4.375 0 1 1 0-8.75 4.375 4.375 0 0 1 0 8.75Z"
    />
  </svg>
);
export { SvgComponent as SearchPlus };
