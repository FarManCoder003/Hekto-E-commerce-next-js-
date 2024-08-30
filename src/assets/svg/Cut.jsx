const SvgComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none">
    <path fill="#000" d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.8 4.2 4.2 7.8M4.2 4.2l3.6 3.6"
    />
  </svg>
);
export { SvgComponent as Cut };
