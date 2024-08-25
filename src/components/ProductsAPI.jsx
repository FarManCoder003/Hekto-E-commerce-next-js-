"use client";
import { Cart } from "@/assets/svg/Cart";
import { CircleColor } from "@/assets/svg/CircleColor";
import { GridView } from "@/assets/svg/GridView";
import { Heart } from "@/assets/svg/Heart";
import { ListView } from "@/assets/svg/ListView";
import { SearchPlus } from "@/assets/svg/SearchPlus";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const fetchProducts = async () => {
  try {
    const res = await fetch(
      "https://dummyjson.com/products?limit=0&sortBy=title&skip=5"
    );
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Fetching error:", error);
    return [];
  }
};

const ProductsAPI = () => {
  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData.slice(0, 12));
    };
    loadProducts();
  }, []);

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <>
      <div className="flex justify-between py-[124px]">
        <div>
          <div
            className={`${josefinSans.className} text-[#151875] text-[22px] font-light`}
          >
            E-commerce Accessories & Fashion item
          </div>
          <div
            className={`${josefinSans.className} text-[#8A8FB9] text-[12px] font-normal`}
          >
            About 9,620 results (0.62 seconds)
          </div>
        </div>
        <div
          className={`${josefinSans.className} flex items-center gap-x-[24px]`}
        >
          <div className="text-[#3F509E] text-[16px] font-normal">
            Per Page:
            <input
              type="text"
              className="w-[54px] h-[24px] ml-[8px] pl-[7px] text-[#8A8FB9] font-normal border border-[#E7E6EF] outline-none"
            />
          </div>
          <div className="text-[#3F509E] text-[16px] font-normal">
            Sort By:
            <select
              name="sort"
              id="sort"
              className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal"
            >
              <option value="Best match">Best match</option>
              <option value="Best match 2">Best match 2</option>
              <option value="Best match 3">Best match 3</option>
              <option value="Best match 4">Best match 4</option>
            </select>
          </div>
          <div className="flex items-center gap-x-[5px]">
            <div className="text-[#3F509E] text-[16px] font-normal">View:</div>
            <div
              onClick={() => handleViewChange("")}
              className="cursor-pointer"
            >
              <GridView />
            </div>
            <div
              onClick={() => handleViewChange("activeList")}
              className="cursor-pointer"
            >
              <ListView />
            </div>
          </div>
          <div>
            <input
              type="text"
              className="w-[162px] h-[30px] pl-[7px] text-[#8A8FB9] font-normal border border-[#E7E6EF] outline-none"
            />
          </div>
        </div>
      </div>
      <div
        className={`cursor-pointer ${
          viewMode === "activeList"
            ? ""
            : "flex flex-wrap justify-center gap-x-[53px] gap-y-[81px]"
        }`}
      >
        {products.map((item, index) => (
          <>
            {viewMode == "activeList" ? (
              <div
                className={`${josefinSans.className} flex items-center gap-x-[32px] my-[34px] pl-[20px] py-[20px] box-shadow3`}
              >
                <Image
                  alt={item.title}
                  src={item.thumbnail}
                  width={250}
                  height={250}
                  className="w-[250px] h-[250px] bg-[#F6F7FB]"
                />
                <div className="items-center">
                  <div className="flex items-center gap-x-[18px]">
                    <div className="text-[#111C85] text-[19px] font-bold">
                      {item.title}
                    </div>
                    <div className="">
                      <CircleColor />
                    </div>
                  </div>
                  <div className="flex items-center gap-x-[10px] my-[15px]">
                    <div className="text-[#151875] text-[14px] font-normal">
                      ${item.price}
                    </div>
                    {item.discountPercentage > 0 && (
                      <div className="text-[#FB2E86] text-[14px] font-normal line-through">
                        $
                        {(
                          (item.price / (100 - item.discountPercentage)) *
                          100
                        ).toFixed(2)}
                      </div>
                    )}
                  </div>
                  <div className="max-w-[691px] text-[#9295AA] text-[17px] font-normal">
                    {item.description}
                  </div>
                  <div className="flex items-center gap-x-[20px] mt-[30px]">
                    <div className="w-[35px] h-[35px] rounded-full pt-[10px] bg-[#fff] box-shadow4">
                      <Cart />
                    </div>
                    <div className="w-[35px] h-[35px] rounded-full pt-[10px] bg-[#fff] box-shadow4">
                      <SearchPlus />
                    </div>
                    <div className="w-[35px] h-[35px] rounded-full pt-[10px] bg-[#fff] box-shadow4">
                      <Heart />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className="w-[270px] group">
                <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[100%] h-[280px] pt-[46px] rounded-[3px] relative overflow-hidden duration-300 ease-in-out cursor-pointer">
                  <div className="absolute bottom-[-200px] group-hover:bottom-[15px] left-[15px] duration-300 ease-in-out">
                    <div className="w-[30px] h-[30px] rounded-full pt-[9px] bg-[#fff]">
                      <Cart />
                    </div>
                    <div className="py-[15px]">
                      <SearchPlus />
                    </div>
                    <div>
                      <Heart />
                    </div>
                  </div>
                  <Image
                    alt={item.title}
                    src={item.thumbnail}
                    width={178}
                    height={178}
                    className="w-[178px] h-[178px] mx-auto"
                  />
                </div>
                <div className="text-center">
                  <div
                    className={`${josefinSans.className} text-[#151875] text-[18px] font-bold pt-[18px]`}
                  >
                    {item.title}
                  </div>
                  <div className="mt-[8px] mb-[15px]">
                    <CircleColor />
                  </div>
                  <div className="flex justify-center items-center gap-x-[10px]">
                    <div
                      className={`${josefinSans.className} text-[#151875] text-[14px] font-normal`}
                    >
                      ${item.price}
                    </div>
                    {item.discountPercentage > 0 && (
                      <div
                        className={`${josefinSans.className} text-[#FB2E86] text-[14px] font-normal line-through`}
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
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default ProductsAPI;
