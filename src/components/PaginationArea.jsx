const PaginationArea = ({
    pageNumber,
    paginate,
    currentPage,
    next,
    prev,
    responsiveView,
  }) => {
    return (
      <>
        <nav className="py-3">
          <ul className="flex flex-wrap gap-[15px]">
            {pageNumber.length > 0 && (
              <li onClick={prev}>
                <a className="flex items-center justify-center text-[#767676] font-sans text-xs lg:text-[14px] font-normal px-[8px] lg:px-[14px] py-[3px] lg:py-[9px] border border-[#F0F0F0] hover:bg-[#262626] hover:text-[#fff] transition duration-200 ease-in-out cursor-pointer">
                  Previous
                </a>
              </li>
            )}
            {responsiveView &&
              pageNumber.map((item, i) => (
                <li
                  onClick={() => paginate(item)}
                  className={
                    currentPage == i + 1
                      ? "flex items-center justify-center font-sans text-xs lg:text-[14px] font-normal px-[8px] lg:px-[14px] py-[3px] lg:py-[9px] border border-[#F0F0F0] bg-[#262626] text-[#fff] transition duration-200 ease-in-out cursor-pointer"
                      : "flex items-center justify-center text-[#767676] font-sans text-xs lg:text-[14px] font-normal px-[8px] lg:px-[14px] py-[3px] lg:py-[9px] border border-[#F0F0F0] hover:bg-[#262626] hover:text-[#fff] transition duration-200 ease-in-out cursor-pointer"
                  }
                >
                  {item + 1}
                </li>
              ))}
            {pageNumber.length > 0 && (
              <li onClick={next}>
                <a className="flex items-center justify-center text-[#767676] font-sans text-xs lg:text-[14px] font-normal px-[8px] lg:px-[14px] py-[3px] lg:py-[9px] border border-[#F0F0F0] hover:bg-[#262626] hover:text-[#fff] transition duration-200 ease-in-out cursor-pointer">
                  Next
                </a>
              </li>
            )}
          </ul>
        </nav>
      </>
    );
  };
  
  export default PaginationArea;