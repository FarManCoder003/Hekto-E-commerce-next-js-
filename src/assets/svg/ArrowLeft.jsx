const SvgComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
    <g clipPath="url(#a)">
      <path
        fill="#8A8FB9"
        d="m4.902 6.825-3.768 3.75v.001a.722.722 0 0 0 0 1.021l3.768 3.75a.721.721 0 1 0 1.018-1.022l-2.53-2.517h15.272a.721.721 0 1 0 0-1.443H3.39l2.53-2.517a.721.721 0 1 0-1.018-1.023Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.922 19.308V.846h18.462v18.462z" />
      </clipPath>
    </defs>
  </svg>
);
export { SvgComponent as ArrowLeft };
