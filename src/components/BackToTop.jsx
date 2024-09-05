import ScrollToTop from "react-scroll-to-top";

const BackToTop = () => {
  return (
    <>
      <ScrollToTop
        smooth
        width="20"
        height="20"
        className="!rounded-full pl-[9px] !bg-[#F4F4FC]"
      />
    </>
  );
};

export default BackToTop;
