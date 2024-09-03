import chair1 from "@/assets/chair 1.png";
import { Cut } from "@/assets/svg/Cut";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Cart = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px] px-2 lg:px-0">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            Shopping cart
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . <span className="text-[#FB2E86]">Shopping cart</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 lg:px-0">
        <div className="lg:flex justify-center gap-x-[81px] py-[131px]">
          <div className="lg:w-[718px]">
            <div className="flex justify-between lg:justify-normal">
              <div className="text-[#1D3178] text-[20px] font-bold pb-[48px] pr-[80px] lg:pr-[226px]">
                Product
              </div>
              <div className="text-[#1D3178] text-[20px] font-bold pb-[82px] lg:pr-[104px]">
                Price
              </div>
              <div className="text-[#1D3178] text-[20px] font-bold pb-[82px] lg:pr-[122px]">
                Quantity
              </div>
              <div className="hidden lg:block text-[#1D3178] text-[20px] font-bold pb-[82px]">
                Total
              </div>
            </div>
            <div className="flex items-center justify-between lg:justify-normal pb-[15px] mb-[15px] border-b border-b-[#E1E1E4]">
              <div className="w-[195px] lg:w-[265px] lg:mr-[36px]">
                <div className="flex items-center gap-x-[17px]">
                  <div className="relative w-[50px] h-[50px] lg:w-[83px] lg:h-[87px] bg-[#C4C4C4] rounded-[3px]">
                    <Image src={chair1} alt="item.title" />
                    <div className="absolute w-[12px] h-[12px] top-[-6px] right-[-6px]">
                      <Cut />
                    </div>
                  </div>
                  <div className="">
                    <div className="w-full text-[#000] text-[14px] font-medium lg:pt-[10px]">
                      item.title
                    </div>
                    <div className="text-[#A1A8C1] text-[12px] font-normal pt-[7px]">
                      Brand: item.brand
                    </div>
                    <div className="text-[#A1A8C1] text-[12px] font-normal">
                      Stock: 0{/*  item.availabilityStatus */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-[#15245E] text-[14px] font-semibold">
                  $32.00
                </div>
              </div>
              <div className="ml-[64px] lg:ml-[122px] lg:mr-[140px]">
                <div className="w-[51px] h-[20px] flex justify-between bg-[#F0EFF2]">
                  <div className="w-[12px] h-[20px] bg-[#E7E7EF] text-[#BEBFC2] text-[12px] text-center cursor-pointer">
                    -
                  </div>
                  <div className="text-[#BEBFC2] text-[12px] font-normal">
                    1
                  </div>
                  <div className="w-[12px] h-[20px] bg-[#E7E7EF] text-[#BEBFC2] text-[12px] text-center cursor-pointer">
                    +
                  </div>
                </div>
              </div>
              <div className="hidden lg:block mt-[34px]">
                <div className="text-[#15245E] text-[14px] font-semibold">
                  £219.00
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button className="w-[134px] h-[39px] bg-[#FB2E86] rounded-[2px] text-[#fff] text-[16px] font-semibold mt-[30px]">
                Update Cart
              </button>
              <button className="w-[134px] h-[39px] bg-[#FB2E86] rounded-[2px] text-[#fff] text-[16px] font-semibold mt-[30px]">
                Clear Cart
              </button>
            </div>
          </div>
          <div className="text-center mx-auto mt-[64px] lg:mt-0">
            <div className="text-[#1D3178] text-[20px] font-bold pb-[42px]">
              Cart Totals
            </div>
            <div className="w-full lg:w-[371px] h-[284px] rounded-[3px] bg-[#F4F4FC] p-[30px] pt-[36px]">
              <div className="flex justify-between items-center mb-[34px] pb-[13px] border-b-[2px] border-b-[#E8E6F1]">
                <div className="text-[#1D3178] text-[18px] font-semibold">
                  Subtotals:
                </div>
                <div className="text-[#15245E] text-[16px] font-normal">
                  £219.00
                </div>
              </div>
              <div className="flex justify-between items-center mb-[17px] pb-[13px] border-b-[2px] border-b-[#E8E6F1]">
                <div className="text-[#1D3178] text-[18px] font-semibold">
                  Total:
                </div>
                <div className="text-[#15245E] text-[16px] font-normal">
                  £219.00
                </div>
              </div>
              <div className="text-[#8A91AB] text-[12px] text-start font-normal pb-[30px]">
                Shipping & taxes calculated at checkout*
              </div>
              <Link href="/OrderComplete">
                <button className="w-full h-[40px] bg-[#19D16F] rounded-[3px] text-center text-[#fff] text-[14px] font-bold">
                  Proceed To Checkout
                </button>
              </Link>
            </div>
            <div className="text-[#1D3178] text-[20px] font-bold pt-[32px] pb-[36px]">
              Calculate Shipping
            </div>
            <div className="w-full lg:w-[371px] h-[324px] rounded-[3px] bg-[#F4F4FC] px-[32px] pt-[44px]">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full text-[#C5CBE3] text-[14px] font-semibold bg-transparent border-b border-b-[#C7CEE4] pb-[8px] mb-[38px] outline-none"
              />
              <input
                type="text"
                placeholder="Gulshan Dhaka"
                className="w-full text-[#202436] text-[14px] font-semibold bg-transparent border-b border-b-[#C7CEE4] pb-[8px] mb-[38px] outline-none"
              />
              <input
                type="text"
                placeholder="Postal code"
                className="w-full text-[#C5CBE3] text-[14px] font-semibold bg-transparent border-b border-b-[#C7CEE4] pb-[8px] mb-[38px] outline-none"
              />
              <Link href="/Checkout">
                <button className="w-full h-[40px] bg-[#FB2E86] rounded-[3px] text-center text-[#fff] text-[14px] font-bold">
                  Calculate Shipping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
