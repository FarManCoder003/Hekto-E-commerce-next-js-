import company from "@/assets/company.png";
import ProductsAPI from "@/components/ProductsAPI";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Products = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px] px-2 lg:px-0">
        <div className="container mx-auto">
          <div
            className={`${josefinSans.className} text-[#101750] text-[36px] font-bold`}
          >
            Products
          </div>
          <div
            className={`${josefinSans.className} text-[#101750] text-[16px] font-medium`}
          >
            Home . <span className="text-[#FB2E86]">Products</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 lg:px-0">
        <ProductsAPI />
        <div className="my-[48px] lg:my-[83px]">
          <Image
            src={company}
            className="w-full lg:w-[904px] lg:h-[93px] mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Products;
