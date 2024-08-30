import company from "@/assets/company.png";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Login = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px]">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            My Account
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . <span className="text-[#FB2E86]">My Account</span>
          </div>
        </div>
      </div>
      <div
        className={`${josefinSans.className} w-[544px] h-[494px] mt-[120px] mx-auto box-shadow8 p-[50px] text-center`}
      >
        <div className="text-[#000000] text-[32px] font-bold">Login</div>
        <div className="text-[#9096B2] text-[17px] font-normal pt-[7px] pb-[37px]">
          Please login using account detail below.
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
        <div className=" text-[#9096B2] text-start text-[17px] font-normal cursor-pointer">
          Forgot your password?
        </div>
        <button className="w-full h-[47px] bg-[#FB2E86] rounded-[3px] text-center text-[#fff] text-[17px] font-normal mt-[23px] mb-[28px]">
          Sign In
        </button>
        <Link href="/SignUp">
          <div className="text-[#9096B2] text-[17px] font-normal">
            Don&apos;t have an Account? Create account
          </div>
        </Link>
      </div>
      <div className="my-[83px]">
        <Image src={company} className="w-[904px] h-[93px] mx-auto" />
      </div>
    </>
  );
};

export default Login;
