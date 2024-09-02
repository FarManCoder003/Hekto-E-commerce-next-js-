"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const NavbarItems = () => {
  let [show, setShow] = useState(false);
  return (
    <>
      <ul
        className={`lg:flex gap-[35px] text-[#0D0E43] text-[16px] font-normal text-center lg:text-start absolute lg:static duration-300 ease-in-out ${
          show == true ? "w-[100px] bg-[white] top-[80px] right-2 block" : "hidden top-[-100px] right-0"
        }`}
      >
        <li className="hover:text-[#FB2E86]">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-[#FB2E86]">
          <Link href={"/Products"}>Products</Link>
        </li>
        <li className="hover:text-[#FB2E86]">
          <Link href={"/Blog"}>Blog</Link>
        </li>
        <li className="hover:text-[#FB2E86]">
          <Link href={"/About"}>About</Link>
        </li>
        <li className="hover:text-[#FB2E86]">
          <Link href={"/Contact"}>Contact</Link>
        </li>
        <li className="hover:text-[#FB2E86]">
          <Link href={"/FAQ"}>FAQ</Link>
        </li>
      </ul>
      <div className="lg:hidden" onClick={() => setShow(!show)}>
        {show == true ? <RxCross2 /> : <FaBars />}
      </div>
    </>
  );
};

export default NavbarItems;
