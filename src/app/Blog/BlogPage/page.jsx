import BlogImage1 from "@/assets/blog image 1.png";
import BlogOffer1 from "@/assets/blog offer 1.png";
import BlogOffer2 from "@/assets/blog offer 2.png";
import BlogOffer3 from "@/assets/blog offer 3.png";
import BlogOffer4 from "@/assets/blog offer 4.png";
import BlogPage1 from "@/assets/blog page 1.png";
import BlogPage2 from "@/assets/blog page 2.png";
import BlogPageBox1 from "@/assets/blog page box 1.png";
import BlogPageBox2 from "@/assets/blog page box 2.png";
import BlogPageImage1 from "@/assets/blog page image 1.png";
import BlogPageImage2 from "@/assets/blog page image 2.png";
import BlogPageImage3 from "@/assets/blog page image 3.png";
import BlogPageImage4 from "@/assets/blog page image 4.png";
import BlogRecent1 from "@/assets/blog recent 1.png";
import BlogRecent2 from "@/assets/blog recent 2.png";
import BlogRecent3 from "@/assets/blog recent 3.png";
import BlogRecent4 from "@/assets/blog recent 4.png";
import BlogSale1 from "@/assets/blog sale 1.png";
import BlogSale2 from "@/assets/blog sale 2.png";
import BlogSale3 from "@/assets/blog sale 3.png";
import company from "@/assets/company.png";
import { ArrowLeft } from "@/assets/svg/ArrowLeft";
import { ArrowRight } from "@/assets/svg/ArrowRight";
import { Calender } from "@/assets/svg/Calender";
import { Comment } from "@/assets/svg/Comment";
import { Facebook } from "@/assets/svg/Facebook";
import { Instagram } from "@/assets/svg/Instagram";
import { Mail2 } from "@/assets/svg/Mail2";
import { Pen } from "@/assets/svg/Pen";
import { Person } from "@/assets/svg/Person";
import { Play } from "@/assets/svg/Play";
import { Search2 } from "@/assets/svg/Search2";
import { Star } from "@/assets/svg/Star";
import { TransparentStar } from "@/assets/svg/TransparentStar";
import { Twitter } from "@/assets/svg/Twitter";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const BlogPage = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px] px-2 lg:px-0">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            Blog page
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . Blog . <span className="text-[#FB2E86]">Blog page</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 lg:px-0">
        <div
          className={`${josefinSans.className} lg:flex gap-x-[56px] pt-[124px] pb-[72px]`}
        >
          <div className="">
            <div className="w-full lg:w-[870px]">
              <Image
                src={BlogImage1}
                className="w-full lg:h-[453px] rounded-[6px]"
              />
              <div className="flex gap-x-[15px] lg:gap-x-[27px] py-[28px]">
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
              <div className="text-[#8A8FB9] text-[16px] font-normal pb-[31px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </div>
              <div className="text-[#8A8FB9] text-[16px] font-normal pt-[63px] pb-[43px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,{" "}
              </div>
              <div className="w-full lg:h-[141px] pt-[15px] lg:pt-[30px] pl-[10px] lg:pl-[14px] text-[#969CB4] text-[18px] font-semibold italic bg-[#FAFAFB] border-l-[2px] border-[#FC45A0] leading-normal">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Commodo dictum sapien, amet,
                consequat toamk risusu”
              </div>
              <div className="flex gap-x-[32px] py-[45px]">
                <div className="relative group cursor-pointer">
                  <Image src={BlogPage1} />
                  <div className="absolute top-[50%] bottom-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-0 h-0 duration-300 ease-in-out group-hover:w-[50px] group-hover:h-[50px] group-hover:pl-[18px] group-hover:pt-[15px] rounded-full bg-[#fff] z-10 opacity-0 group-hover:opacity-100">
                    <Play />
                  </div>
                  <div className="absolute top-[50%] bottom-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-0 h-0 group-hover:w-full rounded-full group-hover:rounded-none group-hover:h-full duration-300 ease-in-out bg-[#00000033]"></div>
                </div>
                <div className="relative group cursor-pointer">
                  <Image src={BlogPage2} />
                  <div className="absolute top-[50%] bottom-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-0 h-0 duration-300 ease-in-out group-hover:w-[50px] group-hover:h-[50px] group-hover:pl-[18px] group-hover:pt-[15px] rounded-full bg-[#fff] z-10 opacity-0 group-hover:opacity-100">
                    <Play />
                  </div>
                  <div className="absolute top-[50%] bottom-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-0 h-0 group-hover:w-full rounded-full group-hover:rounded-none group-hover:h-full duration-300 ease-in-out bg-[#00000033]"></div>
                </div>
              </div>
              <div className="text-[#8A8FB9] text-[16px] font-normal pb-[48px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </div>
              <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal items-center lg:gap-x-[12px] pb-[43px]">
                <div className="w-[90%] lg:w-[210px] text-center lg:text-start">
                  <Image src={BlogPageImage1} class="w-full" />
                  <div className="text-[#000] text-[19px] font-normal pl-[23px] py-[15px]">
                    Quam sed
                  </div>
                  <div className="flex justify-center lg:justify-normal gap-x-[9px]">
                    <div className="text-[#232A69] text-[13px] font-normal pl-[13px]">
                      $32.00
                    </div>
                    <div className="text-[#FF38B0] text-[13px] font-normal line-through">
                      $56.00
                    </div>
                    <div className="flex items-center gap-x-[2px] pl-[9px]">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <TransparentStar />
                    </div>
                  </div>
                </div>
                <div className="w-[90%] lg:w-[210px] text-center lg:text-start mt-4 lg:mt-0">
                  <Image src={BlogPageImage2} class="w-full" />
                  <div className="text-[#000] text-[19px] font-normal pl-[23px] py-[15px]">
                    A etiam
                  </div>
                  <div className="flex justify-center lg:justify-normal gap-x-[9px]">
                    <div className="text-[#232A69] text-[13px] font-normal pl-[13px]">
                      $32.00
                    </div>
                    <div className="text-[#FF38B0] text-[13px] font-normal line-through">
                      $56.00
                    </div>
                    <div className="flex items-center gap-x-[2px] pl-[9px]">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <TransparentStar />
                    </div>
                  </div>
                </div>
                <div className="w-[90%] lg:w-[210px] text-center lg:text-start my-4 lg:my-0">
                  <Image src={BlogPageImage3} class="w-full" />
                  <div className="text-[#000] text-[19px] font-normal justify-center lg:justify-normal pl-[23px] py-[15px]">
                    Tristique sed
                  </div>
                  <div className="flex justify-center lg:justify-normal gap-x-[9px]">
                    <div className="text-[#232A69] text-[13px] font-normal pl-[13px]">
                      $32.00
                    </div>
                    <div className="text-[#FF38B0] text-[13px] font-normal line-through">
                      $56.00
                    </div>
                    <div className="flex items-center gap-x-[2px] pl-[9px]">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <TransparentStar />
                    </div>
                  </div>
                </div>
                <div className="w-[90%] lg:w-[210px] text-center lg:text-start mb-4 lg:mb-0">
                  <Image src={BlogPageImage4} class="w-full" />
                  <div className="text-[#000] text-[19px] font-normal justify-center lg:justify-normal pl-[23px] py-[15px]">
                    Mi nisi
                  </div>
                  <div className="flex justify-center lg:justify-normal gap-x-[9px]">
                    <div className="text-[#232A69] text-[13px] font-normal pl-[13px]">
                      $32.00
                    </div>
                    <div className="text-[#FF38B0] text-[13px] font-normal line-through">
                      $56.00
                    </div>
                    <div className="flex items-center gap-x-[2px] pl-[9px]">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <TransparentStar />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#8A8FB9] text-[16px] font-normal pb-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </div>
              <div className="text-[#8A8FB9] text-[16px] font-normal pb-[59px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </div>
              <div className="flex justify-center gap-x-[18px]">
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
              <div className="flex justify-between items-center w-full h-[45px] bg-[#F7F8FB] rounded-[2px] px-[23px] text-[#8A8FB9] text-[16px] font-medium mt-[32px] mb-[48px] lg:mb-[111px]">
                <div className="flex gap-x-[3px]">
                  <ArrowLeft />
                  <div className="">Previous Post</div>
                </div>
                <div className="flex gap-x-[3px]">
                  <div className="">Next Post</div>
                  <ArrowRight />
                </div>
              </div>
              <div className="flex gap-x-[14px] w-full lg:w-[667px] lg:h-[137px] p-[14px] box-shadow7">
                <Image src={BlogPageBox1} />
                <div className="pt-[22px]">
                  <div className="flex items-center gap-x-[32px]">
                    <div className="text-[#363385] text-[18px] font-semibold">
                      Sapien ac
                    </div>
                    <div className="text-[#A3A2B6] text-[12px] font-normal">
                      Jan 09 2020
                    </div>
                  </div>
                  <div className="text-[#A3A2B6] text-[12px] lg:leading-[28px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    in vitae rutrum vulputate <br className="hidden lg:block" />{" "}
                    consectetur.
                  </div>
                </div>
              </div>
              <div className="flex gap-x-[14px] w-full lg:w-[667px] lg:h-[137px] p-[14px] box-shadow7 mt-[30px] mb-[48px] lg:mb-[135px]">
                <Image src={BlogPageBox2} />
                <div className="pt-[22px]">
                  <div className="flex items-center gap-x-[32px]">
                    <div className="text-[#363385] text-[18px] font-semibold">
                      Sapien ac
                    </div>
                    <div className="text-[#A3A2B6] text-[12px] font-normal">
                      Jan 09 2020
                    </div>
                  </div>
                  <div className="text-[#A3A2B6] text-[12px] lg:leading-[28px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    in vitae rutrum vulputate <br className="hidden lg:block" />{" "}
                    consectetur.
                  </div>
                </div>
              </div>
              <div className="lg:flex gap-x-[30px]">
                <div className="flex items-center gap-x-[3px] w-full lg:w-[420px] h-[42px] text-[#8A8FB9] text-[15px] font-normal px-[10px] border border-[#8A8FB9] mb-[24px] lg:mb-0">
                  <div className="">
                    <Person />
                  </div>
                  <input type="text" placeholder="Your Name*" />
                </div>
                <div className="flex items-center gap-x-[3px] w-full lg:w-[420px] h-[42px] text-[#8A8FB9] text-[15px] font-normal px-[10px] border border-[#8A8FB9] mb-[24px] lg:mb-0">
                  <div className="">
                    <Mail2 />
                  </div>
                  <input type="text" placeholder="Write Your Email*" />
                </div>
              </div>
              <div className="flex gap-x-[3px] pt-[20px] w-full h-[205px] text-[#8A8FB9] text-[15px] font-normal px-[20px] border border-[#8A8FB9] mt-[44px] mb-[22px]">
                <Comment />
                <div className="">
                  <input type="text" placeholder="Write Your Comment*" />
                </div>
              </div>
              <div className="flex gap-x-[6px]">
                <input type="checkbox" />
                <div className=" text-[#8A8FB9] text-[13px] font-medium">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </div>
              </div>
              <div className="text-center">
                <button className="w-full lg:w-[850px] h-[50px] text-[#fff] text-[17px] font-semibold rounded-[2px] bg-[#FB2E86] mt-[46px] mb-[48px] lg:mb-0">
                  Continue Shoppping
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <h5>Search</h5>
            <div className="flex items-center justify-between w-full lg:w-[270px] h-[40px] leading-[38px] rounded-[2px] border border-[#BDBDD8] px-[10px] text-[#1518751A] text-[14px] font-normal mt-[15px] mb-[52px]">
              <input type="text" placeholder="Search For Posts" className="" />
              <Search2 />
            </div>
            <h5>Categories</h5>
            <div className="lg:flex gap-x-[10px] mt-[25px]">
              <div className="flex justify-center lg:block">
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
                  Watches
                </div>
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear lg:my-[12px]">
                  Laptops
                </div>
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
                  Mobile
                </div>
              </div>
              <div className="flex justify-center lg:block">
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
                  Accessories
                </div>
                <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear lg:my-[12px]">
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
      </div>
      <div className="my-[48px] lg:my-[83px]">
        <Image
          src={company}
          className="w-full lg:w-[904px] lg:h-[93px] mx-auto"
        />
      </div>
    </>
  );
};

export default BlogPage;
