import chair1 from "@/assets/chair 1.png";
import company from "@/assets/company.png";
import { Cut } from "@/assets/svg/Cut";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Checkout = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px]">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            Checkout
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . <span className="text-[#FB2E86]">Checkout</span>
          </div>
        </div>
      </div>
      <div className={`${josefinSans.className} container mx-auto`}>
        <div className="flex gap-x-[30px] pt-[74px]">
          <div className="">
            <div className="text-[#1D3178] text-[24px] font-bold pb-[16px]">
              Checkout
            </div>
            <div className="text-[#1D3178] text-[12px] font-normal pb-[25px]">
              Contact Information
            </div>
            <div className="w-[770px] bg-[#F8F8FD] rounded-[3px] px-[30px] py-[62px]">
              <div className="flex justify-between pb-[42px]">
                <div className="text-[#1D3178] text-[18px] font-bold">
                  Contact Information
                </div>
                <Link href="/Login">
                  <div className="text-[#C1C8E1] text-[14px] font-medium">
                    Already have an account? Log in
                  </div>
                </Link>
              </div>
              <input
                type="text"
                className="w-full text-[#C1C8E1] text-[14px] font-semibold pb-[13px] border-b-[2px] border-b-[#BFC6E0] overflow-hidden mb-[32px] bg-transparent"
                placeholder="Email or mobile phone number"
              />
              <label className="box2 flex items-center gap-x-[8px] pb-[109px]">
                <input type="checkbox" className="checkmark4" />
                <span className="checkmark4"></span>
                <div className="text-[#8A91AB] text-[12px] font-medium ">
                  Keep me up to date on news and excluive offers
                </div>
              </label>
              <div className="text-[#1D3178] text-[18px] font-bold pb-[43px]">
                Shipping Address
              </div>
              <div className="flex gap-x-[30px]">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full text-[#C1C8E1] text-[14px] font-medium pb-[14px] border-b-[2px] bg-transparent border-b-[#BFC6E0] overflow-hidden"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full text-[#C1C8E1] text-[14px] font-medium pb-[14px] border-b-[2px] bg-transparent border-b-[#BFC6E0] overflow-hidden"
                />
              </div>
              <input
                type="text"
                placeholder="Apartment, suit e.t.c (optional)"
                className="w-full text-[#C1C8E1] text-[14px] font-medium pb-[14px] mt-[39px] border-b-[2px] bg-transparent border-b-[#BFC6E0] overflow-hidden"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full text-[#C1C8E1] text-[14px] font-medium pb-[14px] mt-[39px] border-b-[2px] bg-transparent border-b-[#BFC6E0] overflow-hidden"
              />
              <div className="flex gap-x-[30px] mt-[39px]">
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full text-[#C1C8E1] text-[14px] font-medium pb-[14px] border-b-[2px] border-b-[#BFC6E0] bg-transparent overflow-hidden"
                />
                <input
                  type="text"
                  placeholder="Postal code"
                  className="w-full text-[#C1C8E1] text-[14px] font-medium pb-[14px] border-b-[2px] border-b-[#BFC6E0] bg-transparent overflow-hidden"
                />
              </div>
              <Link href="/OrderComplete">
                <button className="w-[182px] h-[44px] bg-[#FB2E86] rounded-[2px] text-[#fff] text-[16px] font-semibold mt-[117px]">
                  Continue Shipping
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-[94px]">
            <div className="flex justify-between items-center pb-[15px] mb-[15px] border-b border-b-[#E1E1E4]">
              <div className="w-[265px]">
                <div className="flex gap-x-[17px]">
                  <div className="relative w-[83px] h-[87px] bg-[#C4C4C4] rounded-[3px]">
                    <Image src={chair1} alt="item.title" />
                    <div className="absolute w-[12px] h-[12px] top-[-6px] right-[-6px]">
                      <Cut />
                    </div>
                  </div>
                  <div className="">
                    <div className="text-[#000] text-[14px] font-medium pt-[10px]">
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
              <div className="text-[#15245E] text-[14px] font-semibold">
                $32.00
              </div>
            </div>
            <div className="w-[371px] h-[284px] rounded-[3px] bg-[#F4F4FC] p-[30px] pt-[36px] mt-[42px]">
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
          </div>
        </div>
      </div>
      <div className="my-[83px]">
        <Image src={company} className="w-[904px] h-[93px] mx-auto" />
      </div>
    </>
  );
};

export default Checkout;
