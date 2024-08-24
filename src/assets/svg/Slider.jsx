import * as React from "react";
const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={91}
    height={4}
    fill="none"
    className="mx-auto"
  >
    <rect width={24} height={4} fill="#FB2E86" rx={2} />
    <rect width={16} height={4} x={31} fill="#FEBAD7" rx={2} />
    <rect width={16} height={4} x={53} fill="#FEBAD7" rx={2} />
    <rect width={16} height={4} x={75} fill="#FEBAD7" rx={2} />
  </svg>
);
export { SvgComponent as Slider };
