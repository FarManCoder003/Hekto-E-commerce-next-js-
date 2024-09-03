import company from "@/assets/company.png";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const FAQ = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px] px-2 lg:px-0">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            F.A.Q
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . <span className="text-[#FB2E86]">F.A.Q</span>
          </div>
        </div>
      </div>
      <div className={`${josefinSans.className} container mx-auto px-2 lg:px-0`}>
        <div className="lg:flex gap-x-[106px] pt-[134px]">
          <div className="w-full lg:w-[47%]">
            <div className="text-[#1D3178] text-[36px] font-bold text-center pb-[64px]">
              General Information
            </div>
            <div className="text-[#1D3178] text-[17px] font-bold pb-[15px]">
              Eu dictumst cum at sed euismood condimentum?
            </div>
            <div className="text-[#A1ABCC] text-[16px] font-normal pb-[66px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </div>
            <div className="text-[#1D3178] text-[17px] font-bold pb-[15px]">
              Magna bibendum est fermentum eros.
            </div>
            <div className="text-[#A1ABCC] text-[16px] font-normal pb-[66px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </div>
            <div className="text-[#1D3178] text-[17px] font-bold pb-[15px]">
              Odio muskana hak eris conseekin sceleton?
            </div>
            <div className="text-[#A1ABCC] text-[16px] font-normal pb-[66px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </div>
            <div className="text-[#1D3178] text-[17px] font-bold pb-[15px]">
              Elit id blandit sabara boi velit gua mara?
            </div>
            <div className="text-[#A1ABCC] text-[16px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </div>
          </div>
          <div className="w-full lg:w-[47%] lg:h-[738px] px-2 lg:px-[46px] py-5 lg:py-[62px] bg-[#F8F8FD] mt-[36px]">
            <div className="text-[#1D3178] text-[24px] text-center lg:text-start font-bold pb-[48px] lg:pb-[114px]">
              Ask a Question
            </div>
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full h-[50px] pl-[8px] mb-[35px] text-[#8990B1] text-[16px] font-semibold bg-[#fff] border border-[#CDCEDC] rounded-[5px] outline-none"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full h-[50px] pl-[8px] mb-[45px] text-[#8990B1] text-[16px] font-semibold bg-[#fff] border border-[#CDCEDC] rounded-[5px] outline-none"
            />
            <div className="w-full h-[197px] text-start pl-[8px] pt-[10px] mb-[41px] text-[#8990B1] text-[16px] font-semibold bg-[#fff] border border-[#CDCEDC] rounded-[5px]">
              <input
                type="text"
                placeholder="Type Your Message*"
                className="outline-none"
              />
            </div>
            <button className="w-[156px] h-[48px] bg-[#FB2E86] rounded-[3px] text-[#fff] text-[16px] font-semibold">
              Send Mail
            </button>
          </div>
        </div>
      </div>
      <div className="my-[36px] lg:my-[83px]">
        <Image src={company} className="w-full lg:w-[904px] lg:h-[93px] mx-auto" />
      </div>
    </>
  );
};

export default FAQ;
