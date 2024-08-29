import ContactImage from "@/assets/contact image.png";
import { CircleColor2 } from "@/assets/svg/CircleColor2";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const About = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px]">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            Contact Us
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . <span className="text-[#FB2E86]">Contact Us</span>
          </div>
        </div>
      </div>
      <div
        className={`${josefinSans.className} container mx-auto flex justify-between py-[120px]`}
      >
        <div className="w-[48%]">
          <div className="text-[#151875] text-[36px] font-bold ">
            Information About us
          </div>
          <div className="text-[#8A8FB9] text-[16px] font-semibold pt-[14px] pb-[70px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </div>
          <div className="pb-[76px]">
            <CircleColor2 />
          </div>
          <div className="text-[#151875] text-[36px] font-bold py-[20px]">
            Get In Touch
          </div>
          <div className="text-[#8A8FB9] text-[16px] font-semibold py-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </div>
          <div className="flex gap-x-[30px]">
            <div className="w-[420px] h-[42px] text-[#8A8FB9] text-[15px] font-normal pt-[10px] px-[10px] border border-[#8A8FB9]">
              <input type="text" placeholder="Your Name*" />
            </div>
            <div className="w-[420px] h-[42px] text-[#8A8FB9] text-[15px] font-normal pt-[10px] px-[10px] border border-[#8A8FB9]">
              <input type="text" placeholder="Write Your Email*" />
            </div>
          </div>
          <div className="w-full h-[42px] text-[#8A8FB9] text-[15px] font-normal mt-[34px] pt-[10px] px-[10px] border border-[#8A8FB9]">
            <input type="text" placeholder="Subject*" />
          </div>
          <div className="pt-[20px] w-full h-[205px] text-[#8A8FB9] text-[15px] font-normal px-[20px] border border-[#8A8FB9] mt-[44px] mb-[22px]">
            <input type="text" placeholder="Write Your Comment*" />
          </div>
          <button className="w-[157px] h-[44px] rounded-[3px] bg-[#FB2E86] text-[#fff] text-[16px] font-normal">
            Send Mail
          </button>
        </div>
        <div className="w-[48%]">
          <div className=" pl-[77px] pb-[148px]">
            <div className="text-[#151875] text-[36px] font-bold pb-[30px]">
              Contact Way
            </div>
            <div className="flex gap-x-[37px]">
              <div className="">
                <div className="flex items-center gap-x-[15px] pb-[53px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#5726DF]"></div>
                  <div className="text-[#8A8FB9] text-[16px] font-semibold">
                    Tel: 877-67-88-99 <br />
                    E-Mail: shop@store.com
                  </div>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#FFB265]"></div>
                  <div className="text-[#8A8FB9] text-[16px] font-semibold">
                    20 Margaret st, London <br />
                    Great britain, 3NM98-LK
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-x-[15px] pb-[53px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#FB2E86]"></div>
                  <div className="text-[#8A8FB9] text-[16px] font-semibold">
                    Support Forum <br />
                    For over 24hr
                  </div>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#1BE982]"></div>
                  <div className="text-[#8A8FB9] text-[16px] font-semibold">
                    Free standard shipping <br />
                    on all orders.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src={ContactImage} />
        </div>
      </div>
    </>
  );
};

export default About;
