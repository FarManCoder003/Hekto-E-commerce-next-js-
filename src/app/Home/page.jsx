import blog1 from "@/assets/blog 1.png";
import blog2 from "@/assets/blog 2.png";
import blog3 from "@/assets/blog 3.png";
import company from "@/assets/company.png";
import discountSofa from "@/assets/discount sofa.png";
import lightBulb from "@/assets/light bulb.png";
import sale from "@/assets/sale.png";
import sofa from "@/assets/sofa main.png";
import subBg from "@/assets/subscribe.png";
import { Calender } from "@/assets/svg/Calender";
import { Call2 } from "@/assets/svg/Call2";
import { Cart } from "@/assets/svg/Cart";
import { Check } from "@/assets/svg/Check";
import { Currency } from "@/assets/svg/Currency";
import { Heart } from "@/assets/svg/Heart";
import { Medal } from "@/assets/svg/Medal";
import { Pen } from "@/assets/svg/Pen";
import { SearchPlus } from "@/assets/svg/SearchPlus";
import { Slider2 } from "@/assets/svg/Slider2";
import { Truck } from "@/assets/svg/Truck";
import topCategories1 from "@/assets/top categories 1.png";
import topCategories2 from "@/assets/top categories 2.png";
import topCategories3 from "@/assets/top categories 3.png";
import trendingAd1 from "@/assets/trending ad 1.png";
import trendingAd2 from "@/assets/trending ad 2.png";
import trendingImage1 from "@/assets/trending image 1.png";
import trendingImage2 from "@/assets/trending image 2.png";
import trendingImage3 from "@/assets/trending image 3.png";
import trendingImage4 from "@/assets/trending image 4.png";
import trendingProduct1 from "@/assets/trending product 1.png";
import trendingProduct2 from "@/assets/trending product 2.png";
import trendingProduct3 from "@/assets/trending product 3.png";
import featureSofa from "@/assets/unique feature sofa.png";
import Carousel from "@/components/Carousel";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  try {
    const res = await fetch(
      "https://dummyjson.com/products?limit=0&sortBy=title&skip=6"
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetching error:", error);
    return { products: [] };
  }
}

const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const Home = async () => {
  const { products } = await getData();
  const displayedProducts = products.slice(0, 6);

  return (
    <>
      <div className="bg-[#F2F0FF]">
        <div className="container mx-auto">
          <div className="lg:flex">
            <div className="">
              <Image
                alt=""
                src={lightBulb}
                className="hidden lg:block w-[200px] h-[300px]"
              />
            </div>
            <div className="lg:mx-[35px] px-1 lg:px-0">
              <div
                className={`${lato.className} text-[#FB2E86] text-[16px] font-bold pt-[100px] xl:pt-[200px]`}
              >
                Best Furniture For Your Castle....
              </div>
              <div
                className={`${josefinSans.className} text-[#000] text-[28px] lg:text-[52px] font-bold py-[12px]`}
              >
                New Furniture Collection Trends in 2020
              </div>
              <div
                className={`${lato.className} text-[#8A8FB9] text-[16px] font-bold pb-[24px]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing <br className="hidden lg:block" />
                in phasellus non in justo.
              </div>
              <button className="w-[163px] h-[50px] text-[#EEEFFB] rounded-[2px] bg-[#FB2E86] mb-[100px] lg:mb-[136px]">
                Shop Now
              </button>
            </div>
            <div className="hidden lg:block">
              <Image alt="" src={sofa} className="w-[750px] mt-[80px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-[64px]">
        <div className="pb-[64px]">
          <h2 className={`${lato.className} text-center`}>Featured Products</h2>
          <div className="w-[100%] mx-auto pt-[48px]">
            <Carousel />
          </div>
        </div>
        <div className="pb-[64px]">
          <h2 className={`${lato.className} text-center`}>Latest Products</h2>
          <div className="flex flex-wrap justify-center gap-[45px] lg:gap-[60px] pt-[19px] pb-[58px]">
            <div
              className={`${lato.className} text-[#151875] hover:text-[#FB2E86] text-[18px] font-normal hover:underline underline-[#FB2E86] cursor-pointer`}
            >
              New Arrival
            </div>
            <div
              className={`${lato.className} text-[#151875] hover:text-[#FB2E86] text-[18px] font-normal hover:underline underline-[#FB2E86] cursor-pointer`}
            >
              Best Seller
            </div>
            <div
              className={`${lato.className} text-[#151875] hover:text-[#FB2E86] text-[18px] font-normal hover:underline underline-[#FB2E86] cursor-pointer`}
            >
              Featured
            </div>
            <div
              className={`${lato.className} text-[#151875] hover:text-[#FB2E86] text-[18px] font-normal hover:underline underline-[#FB2E86] cursor-pointer`}
            >
              Special Offer
            </div>
          </div>
          <div className="">
            <div className="flex flex-wrap justify-between px-3 lg:px-0">
              {displayedProducts.map((item, index) => (
                <div
                  key={index}
                  className="w-[47%] lg:w-[30%] group overflow-hidden mb-[64px] cursor-pointer"
                >
                  <Link href={`/ProductDetails/${item.id}`}>
                    <div className="relative bg-[#F7F7F7] group-hover:bg-[#fff] w-full lg:h-[270px] pt-[15px] pb-[8px] duration-300 ease-in overflow-hidden">
                      <div className="absolute top-[25px] left-[-100px] group-hover:left-[18px] duration-300 ease-in-out">
                        <Image
                          alt=""
                          src={sale}
                          className="w-[84px] h-[56px]"
                        />
                      </div>
                      <div className="absolute bottom-[-200px] group-hover:bottom-[15px] left-[15px] duration-300 ease-in-out">
                        <div className="w-[30px] h-[30px] rounded-full pt-[9px] bg-[#EEEFFB]">
                          <Cart />
                        </div>
                        <div className="py-[15px]">
                          <Heart />
                        </div>
                        <div className="">
                          <SearchPlus />
                        </div>
                      </div>
                      <Image
                        alt={item.title}
                        src={item.thumbnail}
                        width="2000"
                        height="2000"
                        className="mx-auto w-[260px] lg:h-[250px] "
                      />
                    </div>
                    <div className="lg:flex lg:justify-between text-center lg:text-start pt-[15px] z-10">
                      <div
                        className={`${josefinSans.className} text-[#151875] text-[16px] font-normal`}
                      >
                        {item.title}
                      </div>
                      <div className="flex justify-center lg:justify-normal gap-[10px] items-center">
                        <div
                          className={`${josefinSans.className} text-[#151875] text-[14px] font-normal`}
                        >
                          ${item.price}
                        </div>
                        {item.discountPercentage > 0 && (
                          <div
                            className={`${josefinSans.className} text-[#FB2448] text-[12px] font-normal line-through`}
                          >
                            $
                            {(
                              (item.price / (100 - item.discountPercentage)) *
                              100
                            ).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <h2 className={`${lato.className} text-center pb-[60px]`}>
            What Shopex Offer!
          </h2>
          <div className="lg:flex justify-center lg:justify-between">
            <div className="w-[95%] lg:w-[23%] mx-auto lg:mx-0 lg:h-[320px] py-6 my-16 box-shadow2">
              <div className="pt-[56px]">
                <Truck />
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[22px] font-semibold pt-[27px] pb-[20px] text-center`}
              >
                24/7 Support
              </div>
              <div
                className={`${lato.className} text-[#1A0B5B4D] text-[17px] font-bold text-center`}
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                <br /> Massa purus gravida.
              </div>
            </div>
            <div className="w-[95%] lg:w-[23%] mx-auto lg:mx-0 lg:h-[320px] py-6 my-16 box-shadow2">
              <div className="pt-[56px]">
                <Currency />
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[22px] font-semibold pt-[27px] pb-[20px] text-center`}
              >
                24/7 Support
              </div>
              <div
                className={`${lato.className} text-[#1A0B5B4D] text-[17px] font-bold text-center`}
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                <br /> Massa purus gravida.
              </div>
            </div>
            <div className="w-[95%] lg:w-[23%] mx-auto lg:mx-0 lg:h-[320px] py-6 my-16 box-shadow2">
              <div className="pt-[56px]">
                <Medal />
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[22px] font-semibold pt-[27px] pb-[20px] text-center`}
              >
                24/7 Support
              </div>
              <div
                className={`${lato.className} text-[#1A0B5B4D] text-[17px] font-bold text-center`}
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                <br /> Massa purus gravida.
              </div>
            </div>
            <div className="w-[95%] lg:w-[23%] mx-auto lg:mx-0 lg:h-[320px] py-6 my-16 box-shadow2">
              <div className="pt-[56px]">
                <Call2 />
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[22px] font-semibold pt-[27px] pb-[20px] text-center`}
              >
                24/7 Support
              </div>
              <div
                className={`${lato.className} text-[#1A0B5B4D] text-[17px] font-bold text-center`}
              >
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                <br /> Massa purus gravida.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F0FF]">
        <Image
          alt=""
          src={featureSofa}
          className="w-[1050px] mx-auto mb-[64px] px-2 lg:px-0"
        />
      </div>
      <div className="container mx-auto">
        <div className="">
          <h2 className={`${lato.className} text-center`}>Trending products</h2>
          <div className="flex flex-wrap justify-between lg:justify-center lg:gap-x-[30px] gap-y-[15px] lg:gap-y-[0] py-[45px] px-2 lg:px-0">
            <div className="!w-[47%] lg:w-[270px] lg:h-[350px] p-[12px] box-shadow2">
              <div className="">
                <Image alt="" src={trendingImage1}></Image>
              </div>
              <div
                className={`${lato.classroom} text-center text-[16px] text-[#151875] font-bold pt-[15px] pb-[8px]`}
              >
                Cantilever chair
              </div>
              <div className="flex gap-[12px] justify-center items-center">
                <div
                  className={`${josefinSans.className} text-[#151875] text-[14px] font-normal`}
                >
                  $26.00
                </div>
                <div
                  className={`${josefinSans.className} text-[#1518754D] text-[12px] font-normal line-through`}
                >
                  $42.00
                </div>
              </div>
            </div>
            <div className="!w-[47%] lg:w-[270px] lg:h-[350px] p-[12px] box-shadow2">
              <div className="">
                <Image alt="" src={trendingImage2}></Image>
              </div>
              <div
                className={`${lato.classroom} text-center text-[16px] text-[#151875] font-bold pt-[15px] pb-[8px]`}
              >
                Cantilever chair
              </div>
              <div className="flex gap-[12px] justify-center items-center">
                <div
                  className={`${josefinSans.className} text-[#151875] text-[14px] font-normal`}
                >
                  $26.00
                </div>
                <div
                  className={`${josefinSans.className} text-[#1518754D] text-[12px] font-normal line-through`}
                >
                  $42.00
                </div>
              </div>
            </div>
            <div className="!w-[47%] lg:w-[270px] lg:h-[350px] p-[12px] box-shadow2">
              <div className="">
                <Image alt="" src={trendingImage3}></Image>
              </div>
              <div
                className={`${lato.classroom} text-center text-[16px] text-[#151875] font-bold pt-[15px] pb-[8px]`}
              >
                Cantilever chair
              </div>
              <div className="flex gap-[12px] justify-center items-center">
                <div
                  className={`${josefinSans.className} text-[#151875] text-[14px] font-normal`}
                >
                  $26.00
                </div>
                <div
                  className={`${josefinSans.className} text-[#1518754D] text-[12px] font-normal line-through`}
                >
                  $42.00
                </div>
              </div>
            </div>
            <div className="!w-[47%] lg:w-[270px] lg:h-[350px] p-[12px] box-shadow2">
              <div className="">
                <Image alt="" src={trendingImage4}></Image>
              </div>
              <div
                className={`${lato.classroom} text-center text-[16px] text-[#151875] font-bold pt-[15px] pb-[8px]`}
              >
                Cantilever chair
              </div>
              <div className="flex gap-[12px] justify-center items-center">
                <div
                  className={`${josefinSans.className} text-[#151875] text-[14px] font-normal`}
                >
                  $26.00
                </div>
                <div
                  className={`${josefinSans.className} text-[#1518754D] text-[12px] font-normal line-through`}
                >
                  $42.00
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center gap-x-[30px] lg:pb-[128px]">
            <div className="lg:w-[420px] lg:h-[270px] box-shadow2 cursor-pointer">
              <Image alt="" src={trendingAd1} className="w-[420px]" />
            </div>
            <div className="lg:w-[420px] lg:h-[270px] box-shadow2 cursor-pointer my-5 lg:my-0">
              <Image alt="" src={trendingAd2} />
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src={trendingProduct1}
                className="w-[267px] h-[74px]"
              ></Image>
              <Image
                alt=""
                src={trendingProduct2}
                className="w-[267px] h-[74px] my-[22px]"
              ></Image>
              <Image
                alt=""
                src={trendingProduct3}
                className="w-[267px] h-[74px]"
              ></Image>
            </div>
          </div>
        </div>
        <div className="pb-[79px]">
          <h2 className={`${lato.className} text-center`}>Discount Item</h2>
          <div className="flex justify-between lg:justify-center lg:gap-[60px] pt-[19px] pb-[58px] px-2 lg:px-0">
            <div
              className={`${lato.className} text-[#151875] hover:text-[#FB2E86] text-[18px] font-normal hover:underline underline-[#FB2E86] cursor-pointer`}
            >
              Wood Chair
            </div>
            <div
              className={`${lato.className} text-[#151875] hover:text-[#FB2E86] text-[18px] font-normal hover:underline underline-[#FB2E86] cursor-pointer`}
            >
              Plastic Chair
            </div>
            <div
              className={`${lato.className} text-[#151875] hover:text-[#FB2E86] text-[18px] font-normal hover:underline underline-[#FB2E86] cursor-pointer`}
            >
              Sofa Collection
            </div>
          </div>
          <div className="lg:flex justify-center lg:gap-x-[90px]">
            <div className="px-2 lg:px-0 lg:pt-[110px]">
              <div
                className={`${josefinSans.className} text-[#151875] text-[35px] font-bold text-center lg:text-start`}
              >
                20% Discount Of All Products
              </div>
              <div
                className={`${josefinSans.className} text-[#FB2E86] text-[21px] font-normal pt-[15px] pb-[21px] text-center lg:text-start`}
              >
                Eams Sofa Compact
              </div>
              <div
                className={`${lato.className} text-[#B7BACB] text-[17px] font-normal`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                <br  className="hidden lg:block"/> feugiat habitasse nec, bibendum condimentum.
              </div>
              <div className="lg:flex justify-between mt-[28px]">
                <div className="">
                  <div className="flex items-center gap-x-[6px]">
                    <div className="">
                      <Check />
                    </div>
                    <div
                      className={`${lato.className} text-[#B8B8DC] text-[16px] font-normal`}
                    >
                      Material expose like metals
                    </div>
                  </div>
                  <div className="flex items-center gap-x-[6px] mt-[10px]">
                    <div className="">
                      <Check />
                    </div>
                    <div
                      className={`${lato.className} text-[#B8B8DC] text-[16px] font-normal`}
                    >
                      Simple neutral colors.
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-x-[6px]">
                    <div className="">
                      <Check />
                    </div>
                    <div
                      className={`${lato.className} text-[#B8B8DC] text-[16px] font-normal`}
                    >
                      Clear lines and geometric figures
                    </div>
                  </div>
                  <div className="flex items-center gap-x-[6px] mt-[10px]">
                    <div className="">
                      <Check />
                    </div>
                    <div
                      className={`${lato.className} text-[#B8B8DC] text-[16px] font-normal`}
                    >
                      Material expose like metals
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={`${josefinSans.className} w-[200px] h-[57px] border-[2px] bg-[#FB2E86] text-[#fff] text-[17px] font-normal border-none mt-[37px]`}
              >
                Shop Now
              </button>
            </div>
            <div className="hidden lg:block">
              <Image alt="" src={discountSofa}></Image>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className={`${lato.className} text-center pb-[56px]`}>
            Top Categories
          </h2>
          <div className="flex flex-wrap justify-between lg:justify-center lg:gap-x-[39px] px-2 lg:px-0 gap-y-3 lg:gap-y-0">
            <div className="w-[47%]">
              <div className="relative group overflow-hidden box-shadow2 lg:w-[269px] lg:h-[269px] rounded-full">
                <Image alt="" src={topCategories1} />
                <button
                  className={`${josefinSans.className} absolute bottom-[-50px] group-hover:bottom-[21px] left-[50%] translate-x-[-50%] w-[94px] h-[29px] border-[2px] bg-[#08D15F] text-[#fff] text-[12px] font-medium border-none duration-300 ease-in-out`}
                >
                  View Shop
                </button>
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[20px] font-normal pt-[27px] pb-[13px] text-center`}
              >
                Mini LCW Chair
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[16px] font-normal text-center`}
              >
                $56.00
              </div>
            </div>
            <div className="w-[47%]">
              <div className="relative group overflow-hidden box-shadow2 lg:w-[269px] lg:h-[269px] rounded-full">
                <Image alt="" src={topCategories2} />
                <button
                  className={`${josefinSans.className} absolute bottom-[-50px] group-hover:bottom-[21px] left-[50%] translate-x-[-50%] w-[94px] h-[29px] border-[2px] bg-[#08D15F] text-[#fff] text-[12px] font-medium border-none duration-300 ease-in-out`}
                >
                  View Shop
                </button>
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[20px] font-normal pt-[27px] pb-[13px] text-center`}
              >
                Mini LCW Chair
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[16px] font-normal text-center`}
              >
                $56.00
              </div>
            </div>
            <div className="w-[47%]">
              <div className="relative group overflow-hidden box-shadow2 lg:w-[269px] lg:h-[269px] rounded-full">
                <Image alt="" src={topCategories3} />
                <button
                  className={`${josefinSans.className} absolute bottom-[-50px] group-hover:bottom-[21px] left-[50%] translate-x-[-50%] w-[94px] h-[29px] border-[2px] bg-[#08D15F] text-[#fff] text-[12px] font-medium border-none duration-300 ease-in-out`}
                >
                  View Shop
                </button>
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[20px] font-normal pt-[27px] pb-[13px] text-center`}
              >
                Mini LCW Chair
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[16px] font-normal text-center`}
              >
                $56.00
              </div>
            </div>
            <div className="w-[47%]">
              <div className="relative group overflow-hidden box-shadow2 lg:w-[269px] lg:h-[269px] rounded-full">
                <Image alt="" src={topCategories1} />
                <button
                  className={`${josefinSans.className} absolute bottom-[-50px] group-hover:bottom-[21px] left-[50%] translate-x-[-50%] w-[94px] h-[29px] border-[2px] bg-[#08D15F] text-[#fff] text-[12px] font-medium border-none duration-300 ease-in-out`}
                >
                  View Shop
                </button>
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[20px] font-normal pt-[27px] pb-[13px] text-center`}
              >
                Mini LCW Chair
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] text-[16px] font-normal text-center`}
              >
                $56.00
              </div>
            </div>
          </div>
          <div className="mt-[24px] lg:mt-0 mb-[64px] lg:mb-[124px]">
            <Slider2 />
          </div>
        </div>
      </div>
      <div className="relative">
        <Image alt="" src={subBg} className="h-[120px] lg:h-[462px] mx-auto"/>
        <div className="absolute top-2 lg:top-[174px] left-[50%] translate-x-[-50%] text-center">
          <div
            className={`${josefinSans.className} text-[#151875] lg:text-[35px] font-bold text-center lg:pb-[28px]`}
          >
            Get Latest Update By Subscribing <br />
            0ur Newsletter
          </div>
          <button
            className={`${josefinSans.classroom} lg:w-[173px] lg:h-[49px] bg-[#FB2E86] text-[#fff] px-3 py-1 lg:py-0 lg:px-0 text-[9px] lg:text-[17px] font-normal`}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <Image
          alt=""
          src={company}
          className="w-full lg:w-[904px] lg:h-[93px] mx-auto my-[48px] lg:my-[96px]"
        />
        <h2 className="text-center pb-[80px]">Latest Blog</h2>
        <div className="lg:flex justify-center gap-x-[56px] pb-[64px] lg:pb-[115px] px-2 lg:px-0">
          <div className="w-full lg:w-[370px] h-[493px] rounded-[5px] box-shadow2 group">
            <Image
              alt=""
              src={blog1}
              className="w-[370px] h-[255px] rounded-[5px]"
            />
            <div className="pl-[20px]">
              <div className="flex gap-x-[33px] pt-[19px] pb-[31px]">
                <div className="flex gap-x-[5px] items-center">
                  <div className="">
                    <Pen />
                  </div>
                  <div
                    className={`${josefinSans.className} text-[#151875] text-[14px] font-thin group-hover:font-normal`}
                  >
                    SaberAli
                  </div>
                </div>
                <div className="flex gap-x-[5px] items-center">
                  <div className="">
                    <Calender />
                  </div>
                  <div
                    className={`${josefinSans.className} text-[#151875] text-[14px] font-thin group-hover:font-normal`}
                  >
                    21 August,2020
                  </div>
                </div>
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] group-hover:text-[#FB2E86] text-[18px] pb-[17px] font-normal group-hover:font-semibold duration-300 ease-in-out`}
              >
                Top essential Trends in 2021
              </div>
              <div
                className={`${lato.className} text-[#72718F] text-[16px] pb-[14px] font-normal`}
              >
                More off this less hello salade lied much <br />
                over tightly circa horse taped mightily
              </div>
              <div
                className={`${lato.className} text-[#151875] group-hover:text-[#FB2E86] text-[16px] font-normal underline duration-300 ease-in-out`}
              >
                Read More
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[370px] h-[493px] rounded-[5px] box-shadow2 group">
            <Image
              alt=""
              src={blog2}
              className="w-[370px] h-[255px] rounded-[5px]"
            />
            <div className="pl-[20px]">
              <div className="flex gap-x-[33px] pt-[19px] pb-[31px]">
                <div className="flex gap-x-[5px] items-center">
                  <div className="">
                    <Pen />
                  </div>
                  <div
                    className={`${josefinSans.className} text-[#151875] text-[14px] font-thin group-hover:font-normal`}
                  >
                    SaberAli
                  </div>
                </div>
                <div className="flex gap-x-[5px] items-center">
                  <div className="">
                    <Calender />
                  </div>
                  <div
                    className={`${josefinSans.className} text-[#151875] text-[14px] font-thin group-hover:font-normal`}
                  >
                    21 August,2020
                  </div>
                </div>
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] group-hover:text-[#FB2E86] text-[18px] pb-[17px] font-normal group-hover:font-semibold duration-300 ease-in-out`}
              >
                Top essential Trends in 2021
              </div>
              <div
                className={`${lato.className} text-[#72718F] text-[16px] pb-[14px] font-normal`}
              >
                More off this less hello salade lied much <br />
                over tightly circa horse taped mightily
              </div>
              <div
                className={`${lato.className} text-[#151875] group-hover:text-[#FB2E86] text-[16px] font-normal underline duration-300 ease-in-out`}
              >
                Read More
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[370px] h-[493px] rounded-[5px] box-shadow2 group">
            <Image
              alt=""
              src={blog3}
              className="w-[370px] h-[255px] rounded-[5px]"
            />
            <div className="pl-[20px]">
              <div className="flex gap-x-[33px] pt-[19px] pb-[31px]">
                <div className="flex gap-x-[5px] items-center">
                  <div className="">
                    <Pen />
                  </div>
                  <div
                    className={`${josefinSans.className} text-[#151875] text-[14px] font-thin group-hover:font-normal`}
                  >
                    SaberAli
                  </div>
                </div>
                <div className="flex gap-x-[5px] items-center">
                  <div className="">
                    <Calender />
                  </div>
                  <div
                    className={`${josefinSans.className} text-[#151875] text-[14px] font-thin group-hover:font-normal`}
                  >
                    21 August,2020
                  </div>
                </div>
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] group-hover:text-[#FB2E86] text-[18px] pb-[17px] font-normal group-hover:font-semibold duration-300 ease-in-out`}
              >
                Top essential Trends in 2021
              </div>
              <div
                className={`${lato.className} text-[#72718F] text-[16px] pb-[14px] font-normal`}
              >
                More off this less hello salade lied much <br />
                over tightly circa horse taped mightily
              </div>
              <div
                className={`${lato.className} text-[#151875] group-hover:text-[#FB2E86] text-[16px] font-normal underline duration-300 ease-in-out`}
              >
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
