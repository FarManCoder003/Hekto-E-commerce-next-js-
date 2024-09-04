import AddToCart from "@/components/AddToCart";
import ProductTotal from "@/components/ProductTotal";
import { Josefin_Sans } from "next/font/google";
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
              <div className="text-[#1D3178] text-[20px] font-bold pb-[48px] pr-[80px] lg:pr-[186px]">
                Product
              </div>
              <div className="text-[#1D3178] text-[20px] font-bold pb-[82px] lg:pr-[144px]">
                Price
              </div>
              <div className="text-[#1D3178] text-[20px] font-bold pb-[82px] lg:pr-[122px]">
                Quantity
              </div>
              <div className="hidden lg:block text-[#1D3178] text-[20px] font-bold pb-[82px]">
                Total
              </div>
            </div>
            <AddToCart />
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
                  £<ProductTotal />
                </div>
              </div>
              <div className="flex justify-between items-center mb-[17px] pb-[13px] border-b-[2px] border-b-[#E8E6F1]">
                <div className="text-[#1D3178] text-[18px] font-semibold">
                  Total:
                </div>
                <div className="text-[#15245E] text-[16px] font-normal">
                  £<ProductTotal />
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
