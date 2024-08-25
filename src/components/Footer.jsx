import { Facebook } from "@/assets/svg/Facebook";
import { Instagram } from "@/assets/svg/Instagram";
import { Twitter } from "@/assets/svg/Twitter";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={`${josefinSans.className}`}>
      <div className="bg-[#EEEFFB]">
        <div className="container mx-auto flex justify-between py-[64px]">
          <div className="">
            <div className="text-[#000] text-[38px] font-bold">Hekto</div>
            <div className="flex mt-[31px] mb-[25px]">
              <input
                type="text"
                className="w-[377px] h-[44px] rounded-[3px] pl-[20px]  text-[#8A8FB9] bg-[rgba(255, 255, 255, .45)] outline-none"
                placeholder="Enter Email Address"
              />
              <button className="w-[135px] h-[44px] text-[#EEEFFB] rounded-[3px] bg-[#FB2E86]">
                Sign Up
              </button>
            </div>
            <div className="text-[#8A8FB9] text-[16px] mb-[10px]">
              Contact Info
            </div>
            <div className="text-[#8A8FB9] text-[16px]">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </div>
          </div>
          <ul>
            <li className="text-[#000] text-[22px] font-semibold mb-[21px]">
              Categories
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Laptops & Computers
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Cameras & Photography
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Smart Phones & Tablets
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Video Games & Consoles
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Waterproof Headphones
            </li>
          </ul>
          <ul>
            <li className="text-[#000] text-[22px] font-semibold mb-[21px]">
              Customer Care
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              My Account
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Discount
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Returns
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Orders History
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Order Tracking
            </li>
          </ul>
          <ul>
            <li className="text-[#000] text-[22px] font-semibold mb-[21px]">
              Pages
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Blog
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Browse the Shop
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Category
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Pre-Built Pages
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              Visual Composer Elements
            </li>
            <li className="text-[#8A8FB9] text-[16px] font-normal my-[21px]">
              WooCommerce Pages
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#E7E4F8]">
        <div className="container mx-auto flex justify-between items-center py-[17px]">
          <div className="text-[#9DA0AE] text-[16px] font-semibold">
            ©Webecy - All Rights Reserved
          </div>
          <div className="flex gap-[10px]">
            <div className="p-[7px] rounded-full bg-[#151875]">
              <Facebook />
            </div>
            <div className="p-[7px] rounded-full bg-[#151875]">
              <Instagram />
            </div>
            <div className="p-[7px] rounded-full bg-[#151875]">
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
