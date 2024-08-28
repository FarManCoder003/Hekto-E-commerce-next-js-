import BlogImage1 from "@/assets/blog image 1.png";
import BlogImage2 from "@/assets/blog image 2.png";
import BlogImage3 from "@/assets/blog image 3.png";
import BlogOffer1 from "@/assets/blog offer 1.png";
import BlogOffer2 from "@/assets/blog offer 2.png";
import BlogOffer3 from "@/assets/blog offer 3.png";
import BlogOffer4 from "@/assets/blog offer 4.png";
import BlogRecent1 from "@/assets/blog recent 1.png";
import BlogRecent2 from "@/assets/blog recent 2.png";
import BlogRecent3 from "@/assets/blog recent 3.png";
import BlogRecent4 from "@/assets/blog recent 4.png";
import BlogSale1 from "@/assets/blog sale 1.png";
import BlogSale2 from "@/assets/blog sale 2.png";
import BlogSale3 from "@/assets/blog sale 3.png";
import company from "@/assets/company.png";
import { Calender } from "@/assets/svg/Calender";
import { Facebook } from "@/assets/svg/Facebook";
import { Instagram } from "@/assets/svg/Instagram";
import { Pen } from "@/assets/svg/Pen";
import { Search2 } from "@/assets/svg/Search2";
import { Twitter } from "@/assets/svg/Twitter";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Blog = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px]">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            Blog
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . <span className="text-[#FB2E86]">Blog</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div
          className={`${josefinSans.className} flex gap-x-[56px] pt-[124px] pb-[72px]`}
        >
          <div className="">
            <div className="w-[870px]">
              <Image
                src={BlogImage1}
                className="w-full h-[453px] rounded-[6px]"
              />
              <div className="flex gap-x-[27px] py-[28px]">
                <div className="flex items-center gap-x-[10px]">
                  <Pen />
                  <div className="w-[160px] h-[23px] leading-[23px] text-center bg-[#FFE7F9] rounded-[2px] text-[#151875] text-[14px] font-normal">
                    Surf Auxion
                  </div>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <Calender />
                  <div className="w-[127px] h-[23px] leading-[23px] text-center bg-[#FFE7F9] rounded-[2px] text-[#151875] text-[14px] font-normal">
                    Aug 09 2020
                  </div>
                </div>
              </div>
              <div className="text-[#151875] text-[30px] font-bold py-[28px]">
                Mauris at orci non vulputate diam tincidunt nec.
              </div>
              <div className="text-[#8A8FB9] text-[16px] font-normal mb-[31px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </div>
              <div className="flex items-center gap-x-[3px]">
                <Link
                  href="/Blog/BlogPage"
                  className="text-[#151875] text-[18px] font-semibold"
                >
                  Read More
                </Link>
                <div className="w-[5px] h-[5px] rounded-full bg-[#FB2E86]"></div>
              </div>
            </div>
            <div className="w-[870px] py-[42px]">
              <Image
                src={BlogImage2}
                className="w-full h-[453px] rounded-[6px]"
              />
              <div className="flex gap-x-[27px] py-[28px]">
                <div className="flex items-center gap-x-[10px]">
                  <Pen />
                  <div className="w-[160px] h-[23px] leading-[23px] text-center bg-[#FFE7F9] rounded-[2px] text-[#151875] text-[14px] font-normal">
                    Surf Auxion
                  </div>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <Calender />
                  <div className="w-[127px] h-[23px] leading-[23px] text-center bg-[#FFE7F9] rounded-[2px] text-[#151875] text-[14px] font-normal">
                    Aug 09 2020
                  </div>
                </div>
              </div>
              <div className="text-[#151875] text-[30px] font-bold py-[28px]">
                Mauris at orci non vulputate diam tincidunt nec.
              </div>
              <div className="text-[#8A8FB9] text-[16px] font-normal mb-[31px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </div>
              <div className="flex items-center gap-x-[3px]">
                <Link
                  href="/Blog/BlogPage"
                  className="text-[#151875] text-[18px] font-semibold"
                >
                  Read More
                </Link>
                <div className="w-[5px] h-[5px] rounded-full bg-[#FB2E86]"></div>
              </div>
            </div>
            <div className="w-[870px]">
              <Image
                src={BlogImage3}
                className="w-full h-[453px] rounded-[6px]"
              />
              <div className="flex gap-x-[27px] py-[28px]">
                <div className="flex items-center gap-x-[10px]">
                  <Pen />
                  <div className="w-[160px] h-[23px] leading-[23px] text-center bg-[#FFE7F9] rounded-[2px] text-[#151875] text-[14px] font-normal">
                    Surf Auxion
                  </div>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <Calender />
                  <div className="w-[127px] h-[23px] leading-[23px] text-center bg-[#FFE7F9] rounded-[2px] text-[#151875] text-[14px] font-normal">
                    Aug 09 2020
                  </div>
                </div>
              </div>
              <div className="text-[#151875] text-[30px] font-bold py-[28px]">
                Mauris at orci non vulputate diam tincidunt nec.
              </div>
              <div className="text-[#8A8FB9] text-[16px] font-normal mb-[31px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </div>
              <div className="flex items-center gap-x-[3px]">
                <Link
                  href="/Blog/BlogPage"
                  className="text-[#151875] text-[18px] font-semibold"
                >
                  Read More
                </Link>
                <div className="w-[5px] h-[5px] rounded-full bg-[#FB2E86]"></div>
              </div>
            </div>
          </div>
          <div className="">
            <h5>Search</h5>
            <div className="flex items-center justify-between w-[270px] h-[40px] leading-[38px] rounded-[2px] border border-[#BDBDD8] px-[10px] text-[#1518751A] text-[14px] font-normal mt-[15px] mb-[52px]">
              <input type="text" placeholder="Search For Posts" className="" />
              <Search2 />
            </div>
            <h5>Categories</h5>
            <div className="flex gap-x-[10px] mt-[25px]">
              <div className="">
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
                  Watches
                </div>
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear my-[12px]">
                  Laptops
                </div>
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
                  Mobile
                </div>
              </div>
              <div className="">
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
                  Accessories
                </div>
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear my-[12px]">
                  Jewelries
                </div>
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
                  Bags
                </div>
              </div>
            </div>
            <h5 className="py-[37px]">Recent Post</h5>
            <div className="flex gap-x-[6px]">
              <Image src={BlogRecent1} className="w-[70px] h-[51px]" />
              <div className="pt-[7px]">
                <div className="text-[#3F509E] text-[14px] font-normal">
                  It is a long established fact
                </div>
                <div className="text-[#8A8FB9] text-[11px] font-semibold">
                  Aug 09 2020
                </div>
              </div>
            </div>
            <div className="flex gap-x-[6px] py-[22px]">
              <Image src={BlogRecent2} className="w-[70px] h-[51px]" />
              <div className="pt-[7px]">
                <div className="text-[#3F509E] text-[14px] font-normal">
                  It is a long established fact
                </div>
                <div className="text-[#8A8FB9] text-[11px] font-semibold">
                  Aug 09 2020
                </div>
              </div>
            </div>
            <div className="flex gap-x-[6px]">
              <Image src={BlogRecent3} className="w-[70px] h-[51px]" />
              <div className="pt-[7px]">
                <div className="text-[#3F509E] text-[14px] font-normal">
                  It is a long established fact
                </div>
                <div className="text-[#8A8FB9] text-[11px] font-semibold">
                  Aug 09 2020
                </div>
              </div>
            </div>
            <div className="flex gap-x-[6px] pt-[22px]">
              <Image src={BlogRecent4} className="w-[70px] h-[51px]" />
              <div className="pt-[7px]">
                <div className="text-[#3F509E] text-[14px] font-normal">
                  It is a long established fact
                </div>
                <div className="text-[#8A8FB9] text-[11px] font-semibold">
                  Aug 09 2020
                </div>
              </div>
            </div>
            <h5 className="py-[37px]">Sale Product</h5>
            <div className="flex gap-x-[6px]">
              <Image src={BlogSale1} className="w-[70px] h-[51px]" />
              <div className="pt-[7px]">
                <div className="text-[#3F509E] text-[14px] font-normal">
                  Elit ornare in enim mauris.
                </div>
                <div className="text-[#8A8FB9] text-[11px] font-semibold">
                  Aug 09 2020
                </div>
              </div>
            </div>
            <div className="flex gap-x-[6px] py-[22px]">
              <Image src={BlogSale2} className="w-[70px] h-[51px]" />
              <div className="pt-[7px]">
                <div className="text-[#3F509E] text-[14px] font-normal">
                  Viverra pulvinar et enim.
                </div>
                <div className="text-[#8A8FB9] text-[11px] font-semibold">
                  Aug 09 2020
                </div>
              </div>
            </div>
            <div className="flex gap-x-[6px]">
              <Image src={BlogSale3} className="w-[70px] h-[51px]" />
              <div className="pt-[7px]">
                <div className="text-[#3F509E] text-[14px] font-normal">
                  Mattis varius donec fdsfd
                </div>
                <div className="text-[#8A8FB9] text-[11px] font-semibold">
                  Aug 09 2020
                </div>
              </div>
            </div>
            <h5 className="py-[37px]">Offer Product</h5>
            <div className="flex gap-x-[15px]">
              <div className="">
                <div className="">
                  <Image src={BlogOffer1}></Image>
                  <div className="text-[#151875] text-[14px] font-semibold text-center pt-[9px] pb-[6px]">
                    Duis lectus est.
                  </div>
                  <div className="text-[#8A8FB9] text-[12px] font-semibold text-center">
                    $12.00 - $15.00
                  </div>
                </div>
                <div className="pt-[30px]">
                  <Image src={BlogOffer2}></Image>
                  <div className="text-[#151875] text-[14px] font-semibold text-center pt-[9px] pb-[6px]">
                    Sed placerat.
                  </div>
                  <div className="text-[#8A8FB9] text-[12px] font-semibold text-center">
                    $12.00 - $15.00
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <Image src={BlogOffer3}></Image>
                  <div className="text-[#151875] text-[14px] font-semibold text-center pt-[9px] pb-[6px]">
                    Netus proin.
                  </div>
                  <div className="text-[#8A8FB9] text-[12px] font-semibold text-center">
                    $12.00 - $15.00
                  </div>
                </div>
                <div className="pt-[30px]">
                  <Image src={BlogOffer4}></Image>
                  <div className="text-[#151875] text-[14px] font-semibold text-center pt-[9px] pb-[6px]">
                    Platea in.
                  </div>
                  <div className="text-[#8A8FB9] text-[12px] font-semibold text-center">
                    $12.00 - $15.00
                  </div>
                </div>
              </div>
            </div>
            <h5 className="pt-[37px] pb-[23px]">Follow</h5>
            <div className="w-[130px] rounded-[3px] flex gap-x-[18px] box-shadow6 pl-[11px] px-[12px] py-[8px]">
              <div className="w-[25px] h-[25px] pl-[3px] pt-[4px] rounded-full text-[#fff] bg-[#5625DF]">
                <Facebook />
              </div>
              <div className="w-[25px] h-[25px] pl-[4px] pt-[4px] rounded-full text-[#fff] bg-[#FF27B7]">
                <Instagram />
              </div>
              <div className="w-[25px] h-[25px] pl-[4px] pt-[4px] rounded-full text-[#fff] bg-[#37DAF3]">
                <Twitter />
              </div>
            </div>
            <h5 className="pt-[37px] pb-[18px]">Tags</h5>
            <div className="">
              <div className="flex gap-x-[41px]">
                <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
                  General
                </div>
                <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
                  Atsanil
                </div>
                <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
                  Insas.
                </div>
              </div>
              <div className="flex gap-x-[41px] pt-[12px]">
                <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
                  Bibsaas
                </div>
                <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
                  Nulla.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${josefinSans.className} flex gap-x-[36px] justify-center`}
        >
          <div className="w-[24px] h-[24px] text-[16px] font-semibold rounded-[2px] bg-[#FB2CA8] text-[#fff] text-center">
            1
          </div>
          <div className="w-[24px] h-[24px] text-[16px] font-semibold rounded-[2px] border border-[#E0D3F5] text-[#E0D3F5] text-center">
            2
          </div>
          <div className="w-[24px] h-[24px] text-[16px] font-semibold rounded-[2px] border border-[#E0D3F5] text-[#E0D3F5] text-center">
            3
          </div>
          <div className="w-[24px] h-[24px] text-[16px] font-semibold rounded-[2px] border border-[#E0D3F5] text-[#E0D3F5] text-center">
            4
          </div>
        </div>
      </div>
      <div className="my-[83px]">
        <Image src={company} className="w-[904px] h-[93px] mx-auto" />
      </div>
    </>
  );
};

export default Blog;
