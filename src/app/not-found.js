import company from "@/assets/company.png";
import Error from "@/assets/Error.png";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <>
      <div className="container mx-auto px-2 lg:px-0">
        <div className="text-center">
          <Image src={Error} className="mx-auto my-[36px]" />
          <div
            className={`${josefinSans.className} text-[#152970] text-[24px] font-bold text-center`}
          >
            oops! The page you requested was not found!
          </div>
          <Link href="/">
            <button
              className={`${josefinSans.className} w-[165px] h-[44px] rounded-[3px] bg-[#FB2E86] text-[#fff] text-[16px] font-normal mt-[62px]`}
            >
              Back to Home
            </button>
          </Link>
        </div>
        <div className="my-[48px] lg:my-[83px]">
          <Image
            src={company}
            className="w-full lg:w-[904px] lg:h-[93px] mx-auto"
          />
        </div>
      </div>
    </>
  );
}
