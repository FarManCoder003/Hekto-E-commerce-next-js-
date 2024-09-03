import company from "@/assets/company.png";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const SignUp = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px] px-2 lg:px-0">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            Sign up
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . <span className="text-[#FB2E86]">Sign up</span>
          </div>
        </div>
      </div>
      <div
        className={`${josefinSans.className} w-[95%] lg:w-[544px] lg:h-[474px] mt-[48px] lg:mt-[120px] mx-auto box-shadow8 p-[24px] lg:p-[50px] text-center`}
      >
        <div className="text-[#000000] text-[32px] font-bold">Sign up</div>
        <div className="text-[#9096B2] text-[17px] font-normal pt-[7px] pb-[37px]">
          Please sign up filling the details below.
        </div>
        <input
          type="text"
          className="w-full h-[52px] pl-[13px] text-[#9096B2] text-[16px] font-normal border border-[#C2C5E1] rounded-[2px]"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="w-full h-[52px] pl-[13px] text-[#9096B2] text-[16px] font-normal border border-[#C2C5E1] rounded-[2px] mt-[23px] mb-[13px]"
          placeholder="Password"
        />
        <button className="w-full h-[47px] bg-[#FB2E86] rounded-[3px] text-center text-[#fff] text-[17px] font-normal mt-[23px] mb-[28px]">
          Create account
        </button>
      </div>
      <div className="my-[48px] lg:my-[83px]">
        <Image src={company} className="w-full lg:w-[904px] lg:h-[93px] mx-auto" />
      </div>
    </>
  );
};

export default SignUp;
