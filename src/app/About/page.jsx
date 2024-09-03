import AboutClient from "@/assets/about client.png";
import AboutImage from "@/assets/about image.png";
import Slide from "@/assets/slide.png";
import { Call2 } from "@/assets/svg/Call2";
import { Currency } from "@/assets/svg/Currency";
import { Medal } from "@/assets/svg/Medal";
import { Truck } from "@/assets/svg/Truck";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const About = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px] px-2 lg:px-0">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            About Us
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . <span className="text-[#FB2E86]">About Us</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 lg:px-0">
        <div className="lg:flex justify-center gap-x-[30px] pt-[48px] lg:pt-[119px]">
          <div className="w-[100%] lg:w-[48%]">
            <Image src={AboutImage} />
          </div>
          <div className={`${josefinSans.className} w-[100%] lg:w-[48%]`}>
            <div className="text-[#151875] text-[36px] font-semibold text-center lg:text-start pt-[41px]">
              Know About Our E-commerce Business, History
            </div>
            <div className="text-[#8A8FB9] text-[16px] font-semibold pt-[14px] text-justify lg:text-start pb-[48px] lg:pb-[70px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </div>
            <button className="w-[145px] h-[44px] text-[#fff] text-[18px] font-semibold bg-[#FB2E86] rounded-[3px]">
              Contact Us
            </button>
          </div>
        </div>
        <div className="text-[#000] text-[42px] font-bold text-center pt-[141px] pb-[67px]">
          Our Features
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="w-[97%] lg:w-[23%] lg:h-[320px] border-b-[2px] border-b-[white] hover:border-b-[#FF9100] mb-[36px] pb-6 lg:pb-0 lg:mb-0 box-shadow2">
            <div className="pt-[56px]">
              <Truck />
            </div>
            <div
              className={`${josefinSans.className} text-[#151875] text-[22px] font-semibold pt-[27px] pb-[20px] text-center`}
            >
              24/7 Support
            </div>
            <div
              className={`${lato.className} text-[#1A0B5B4D] text-[17px] font-bold text-center`}
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br /> Massa purus gravida.
            </div>
          </div>
          <div className="w-[97%] lg:w-[23%] lg:h-[320px] border-b-[2px] border-b-[white] hover:border-b-[#FF9100] mb-[36px] pb-6 lg:pb-0 lg:mb-0 box-shadow2">
            <div className="pt-[56px]">
              <Currency />
            </div>
            <div
              className={`${josefinSans.className} text-[#151875] text-[22px] font-semibold pt-[27px] pb-[20px] text-center`}
            >
              24/7 Support
            </div>
            <div
              className={`${lato.className} text-[#1A0B5B4D] text-[17px] font-bold text-center`}
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br /> Massa purus gravida.
            </div>
          </div>
          <div className="w-[97%] lg:w-[23%] lg:h-[320px] border-b-[2px] border-b-[white] hover:border-b-[#FF9100] mb-[36px] pb-6 lg:pb-0 lg:mb-0 box-shadow2">
            <div className="pt-[56px]">
              <Medal />
            </div>
            <div
              className={`${josefinSans.className} text-[#151875] text-[22px] font-semibold pt-[27px] pb-[20px] text-center`}
            >
              24/7 Support
            </div>
            <div
              className={`${lato.className} text-[#1A0B5B4D] text-[17px] font-bold text-center`}
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br /> Massa purus gravida.
            </div>
          </div>
          <div className="w-[97%] lg:w-[23%] lg:h-[320px] border-b-[2px] border-b-[white] hover:border-b-[#FF9100] mb-[36px] pb-6 lg:pb-0 lg:mb-0 box-shadow2">
            <div className="pt-[56px]">
              <Call2 />
            </div>
            <div
              className={`${josefinSans.className} text-[#151875] text-[22px] font-semibold pt-[27px] pb-[20px] text-center`}
            >
              24/7 Support
            </div>
            <div
              className={`${lato.className} text-[#1A0B5B4D] text-[17px] font-bold text-center`}
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br /> Massa purus gravida.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FBFBFF]">
        <div className="container mx-auto h-[500px] py-[70px] mt-[133px] mb-[100px] lg:mb-[300px]">
          <div className="text-[#000] text-[42px] font-bold text-center pb-[64px]">
            Our Client
          </div>
          <Image src={AboutClient} className="mx-auto" />
          <div className="text-[#151875] text-[22px] font-semibold text-center pt-[25px]">
            Selina Gomez
          </div>
          <div className="text-[#8A8FB9] text-[10px] font-semibold text-center pb-[14px]">
            Ceo At Webecy Digital
          </div>
          <div className="text-[#8A8FB9] text-[16px] font-bold text-center pb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin{" "}
            <br className="hidden lg:block" /> aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor
            <br className="hidden lg:block" /> aliquam lacus volutpat praesent.
          </div>
          <Image src={Slide} className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default About;
