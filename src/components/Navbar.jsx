import logo from "@/assets/logo.png";
import { Search } from "@/assets/svg/Search";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={`${josefinSans.className} container mx-auto`}>
      <div className="flex items-center justify-between h-[70px]">
        <div>
          <Image src={logo} />
        </div>
        <ul className="flex gap-[35px] text-[#0D0E43] text-[16px] font-normal">
          <li className="hover:text-[#FB2E86]">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-[#FB2E86]">
            <Link href={"/"}>Pages</Link>
          </li>
          <li className="hover:text-[#FB2E86]">
            <Link href={"/Products"}>Products</Link>
          </li>
          <li className="hover:text-[#FB2E86]">
            <Link href={"/"}>Blog</Link>
          </li>
          <li className="hover:text-[#FB2E86]">
            <Link href={"/"}>Shop</Link>
          </li>
          <li className="hover:text-[#FB2E86]">
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <div className="flex">
          <input
            type="text"
            className="w-[266px] h-[40px] pl-[10px] bg-[#D9D9D9] outline-none"
          />
          <div className="px-[15px] py-[9px] bg-[#FB2E86] cursor-pointer">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
