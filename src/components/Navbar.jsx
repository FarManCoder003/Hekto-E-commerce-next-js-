import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";

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
            <Link href={"/"}>Products</Link>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z"
                fill="url(#paint0_linear_4417_244)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4417_244"
                  x1="0.979004"
                  y1="0.979004"
                  x2="24.4288"
                  y2="15.376"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F3F9FF" />
                  <stop offset="1" stop-color="#F1F0FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
