import company from "@/assets/company.png";
import OrderImage from "@/assets/order image 1.png";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const OrderComplete = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px]">
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
      <div className={`${josefinSans.className} container mx-auto`}>
        <div className="relative mt-[81px] mb-[230px]">
          <div className="absolute z-[-1] top-0 right-0 left-0 overflow-hidden">
            <Image src={OrderImage} className="mx-auto" />
          </div>
          <div className="z-[1] text-center pt-[112px]">
            <div className="text-[#101750] text-[36px] font-bold pb-[28px]">
              Your Order Is Completed!
            </div>
            <div className="text-[#8D92A7] text-[16px] font-bold pb-[25px]">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 <br />
              hours. You will receive an email confirmation when your order is
              completed.
            </div>
            <Link href="/Products">
              <button className="w-[208px] h-[59px] rounded-[3px] text-[#fff] text-[16px] font-semibold bg-[#FF1788]">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-[83px]">
        <Image src={company} className="w-[904px] h-[93px] mx-auto" />
      </div>
    </>
  );
};

export default OrderComplete;
