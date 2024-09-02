import { Call } from "@/assets/svg/Call";
import { Login } from "@/assets/svg/Login";
import { Mail } from "@/assets/svg/Mail";
import { NavCart } from "@/assets/svg/NavCart";
import { Wishlist } from "@/assets/svg/Wishlist";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className={`${josefinSans.className} bg-[#7E33E0]`}>
      <div className="container mx-auto lg:flex justify-center lg:justify-between lg:h-[44px]">
        <div className="hidden lg:flex items-center justify-center lg:justify-between gap-x-[35px] lg:gap-[48px]">
          <div className="flex items-center gap-[10px]">
            <div>
              <Mail />
            </div>
            <div className="text-[#F1F1F1] text-[16px] font-semibold">
              mhhasanul@gmail.com
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div>
              <Call />
            </div>
            <div className="text-[#F1F1F1] text-[16px] font-semibold ">
              (12345)67890
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <select className="bg-transparent text-[#F1F1F1]">
            <option
              value=""
              className="bg-[#7E33E0] text-[#F1F1F1] text-[16px] font-semibold"
            >
              English
            </option>
            <option
              value=""
              className="bg-[#7E33E0] text-[#F1F1F1] text-[16px] font-semibold"
            >
              Bangla
            </option>
            <option
              value=""
              className="bg-[#7E33E0] text-[#F1F1F1] text-[16px] font-semibold"
            >
              Arabic
            </option>
            <option
              value=""
              className="bg-[#7E33E0] text-[#F1F1F1] text-[16px] font-semibold"
            >
              Spanish
            </option>
          </select>
          <select className="bg-transparent text-[#F1F1F1]">
            <option
              value=""
              className="bg-[#7E33E0] text-[#F1F1F1] text-[16px] font-semibold"
            >
              USD
            </option>
            <option
              value=""
              className="bg-[#7E33E0] text-[#F1F1F1] text-[16px] font-semibold"
            >
              BDT
            </option>
            <option
              value=""
              className="bg-[#7E33E0] text-[#F1F1F1] text-[16px] font-semibold"
            >
              JPY
            </option>
            <option
              value=""
              className="bg-[#7E33E0] text-[#F1F1F1] text-[16px] font-semibold"
            >
              EUR
            </option>
          </select>
          <Link href="/Login" className="flex">
            <div className="text-[#F1F1F1] text-[16px] font-semibold">
              Login
            </div>
            <div className="">
              <Login />
            </div>
          </Link>
          <div className="flex items-center gap-1">
            <div className="text-[#F1F1F1] text-[16px] font-semibold">
              Wishlist
            </div>
            <div className="">
              <Wishlist />
            </div>
          </div>
          <div className="">
            <Link href="/Cart">
              <NavCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
