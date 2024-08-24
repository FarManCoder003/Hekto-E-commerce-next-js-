const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={4}
    fill="none"
    className="mx-auto duration-300 ease-in-out"
  >
    <rect width={14} height={4} fill="#05E6B7" rx={2} />
    <rect width={14} height={4} x={19} fill="#F701A8" rx={2} />
    <rect
      width={14}
      height={4}
      x={38}
      fill="#00009D"
      rx={2}
      className="group-hover:fill-[#FFEAC1]"
    />
  </svg>
);
export { SvgComponent as Color };
