import company from "@/assets/company.png";
import ProductsAPI from "@/components/ProductsAPI";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Products = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] pt-[96px]">
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
      <div className="container mx-auto">
        <ProductsAPI />
        <div className="my-[83px]">
          <Image src={company} className="w-[904px] h-[93px] mx-auto" />
        </div>
      </div>
    </>
  );
};

export default Products;
