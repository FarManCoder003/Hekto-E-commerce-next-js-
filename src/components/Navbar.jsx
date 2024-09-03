import logo from "@/assets/logo.png";
import { Search } from "@/assets/svg/Search";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import NavSearch from "./NavSearch";
import NavbarItems from "./NavbarItems";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={`${josefinSans.className} container mx-auto`}>
      <div className="lg:flex items-center justify-between lg:h-[70px] px-1 lg:px-0 py-[16px] lg:py-0">
        <div className="flex px-[25px] lg:px-0 lg:gap-x-[200px] items-center justify-between">
          <Image src={logo} />
          <NavbarItems />
        </div>
        <div className="flex justify-center mt-[24px] lg:mt-0">
          <NavSearch />
          <div className="px-[15px] py-[9px] bg-[#FB2E86] cursor-pointer">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
