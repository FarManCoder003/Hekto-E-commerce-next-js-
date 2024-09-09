"use client";
import { Blue } from "@/assets/svg/Blue";
import { Brown } from "@/assets/svg/Brown";
import { Cart } from "@/assets/svg/Cart";
import { CircleColor } from "@/assets/svg/CircleColor";
import { Green } from "@/assets/svg/Green";
import { GridView } from "@/assets/svg/GridView";
import { Heart } from "@/assets/svg/Heart";
import { ListView } from "@/assets/svg/ListView";
import { Orange } from "@/assets/svg/Orange";
import { Purple } from "@/assets/svg/Purple";
import { Search2 } from "@/assets/svg/Search2";
import { SearchPlus } from "@/assets/svg/SearchPlus";
import { Sky } from "@/assets/svg/Sky";
import { Star } from "@/assets/svg/Star";
import { TransparentStar } from "@/assets/svg/TransparentStar";
import { addToCart } from "@/components/ProductSlice";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

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
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  let dispatch = useDispatch();
  let handleCart = (item) => {
    toast("Added to cart");
    dispatch(addToCart({ ...item, qun: 1 }));
  };

  useEffect(() => {
    const loadProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };
    loadProducts();
  }, []);
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  const renderRating = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      let ratingNumber = index + 0.5;
      return rating >= index + 1 && rating > ratingNumber ? (
        <Star key={index} />
      ) : (
        <TransparentStar key={index} />
      );
    });
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <div className="lg:flex justify-between py-[124px]">
        <div>
          <div
            className={`${josefinSans.className} text-[#151875] text-[20px] font-light`}
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
          className={`${josefinSans.className} flex flex-wrap items-center gap-[24px] mt-[24px] lg:mt-0`}
        >
          <div className="flex items-center text-[#3F509E] text-[16px] font-normal">
            Per Page:
            <input
              type="text"
              className="w-[54px] h-[24px] ml-[8px] pl-[7px] text-[#8A8FB9] font-normal border border-[#E7E6EF] outline-none"
            />
          </div>
          <div className="flex text-[#3F509E] text-[16px] font-normal">
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
              className="hidden lg:block w-[162px] h-[30px] pl-[7px] text-[#8A8FB9] font-normal border border-[#E7E6EF] outline-none"
            />
          </div>
        </div>
      </div>
      <div
        className={` ${
          viewMode === "activeList" ? "lg:flex gap-x-[35px]" : ""
        }`}
      >
        {viewMode === "activeList" ? (
          <div className={`${lato.className}`}>
            <div className="pt-[40px]">
              <h3 className="pb-[7px]">Product Brand</h3>
              <label className="box">
                <h4>Coaster Furniture</h4>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="box">
                <h4>Fusion Dot High Fashion</h4>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="box">
                <h4>Unique Furniture Restore</h4>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="box">
                <h4>Dream Furniture Flipping</h4>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="box">
                <h4>Young Repurposed</h4>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="box">
                <h4>Green DIY furniture</h4>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="py-[44px]">
              <h3 className="pb-[7px]">Discount Offer</h3>
              <label className="box">
                <h4>20% Cashback</h4>
                <input type="checkbox" />
                <span className="checkmark2"></span>
              </label>
              <label className="box">
                <h4>5% Cashback Offer</h4>
                <input type="checkbox" />
                <span className="checkmark2"></span>
              </label>
              <label className="box">
                <h4>25% Cashback Offer</h4>
                <input type="checkbox" />
                <span className="checkmark2"></span>
              </label>
            </div>
            <div className="">
              <h3 className="pb-[7px]">Rating Item</h3>
              <label className="box">
                <div className="flex pt-[6px] gap-x-[2px]">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <TransparentStar />
                </div>
                <input type="checkbox" />
                <span className="checkmark3"></span>
              </label>
              <label className="box">
                <div className="flex pt-[6px] gap-x-[2px]">
                  <Star />
                  <Star />
                  <Star />
                  <TransparentStar />
                  <TransparentStar />
                </div>
                <input type="checkbox" />
                <span className="checkmark3"></span>
              </label>
              <label className="box">
                <div className="flex pt-[6px] gap-x-[2px]">
                  <Star />
                  <Star />
                  <TransparentStar />
                  <TransparentStar />
                  <TransparentStar />
                </div>
                <input type="checkbox" />
                <span className="checkmark3"></span>
              </label>
              <label className="box">
                <div className="flex pt-[6px] gap-x-[2px]">
                  <Star />
                  <TransparentStar />
                  <TransparentStar />
                  <TransparentStar />
                  <TransparentStar />
                </div>
                <input type="checkbox" />
                <span className="checkmark3"></span>
              </label>
            </div>
            <div className="py-[44px]">
              <h3 className="pb-[7px]">Categories</h3>
              {categories.map((category) => (
                <label key={category} className="box">
                  <h4
                    className="capitalize"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </h4>
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                  />
                  <span className="checkmark2"></span>
                </label>
              ))}
            </div>
            <div className="">
              <h3 className="pb-[7px]">Price Filter</h3>
              <label className="box">
                <h4>$0.00 - $150.00</h4>
                <input type="checkbox" />
                <span className="checkmark2"></span>
              </label>
              <label className="box">
                <h4>$150.00 - $350.00</h4>
                <input type="checkbox" />
                <span className="checkmark2"></span>
              </label>
              <label className="box">
                <h4>$350.00 - $450.00</h4>
                <input type="checkbox" />
                <span className="checkmark2"></span>
              </label>
              <label className="box">
                <h4>$450.00+</h4>
                <input type="checkbox" />
                <span className="checkmark2"></span>
              </label>
            </div>
            <div className="w-[203px] h-[31px] flex justify-between items-center border border-[#BCBDDB] rounded-[3px]  px-[14px] mt-[18px] mb-[50px]">
              <input
                type="text"
                className="text-[#1518751A] text-[12px] outline-none border-none"
                placeholder="$10.00 - $99999"
              />
              <Search2 />
            </div>
            <div className="mb-[50px] lg:mb-0">
              <h3>Filter By Color</h3>
              <div className="flex gap-x-[8px]">
                <div className="">
                  <div className="flex items-center gap-x-[4px] mt-[18px] mb-[14px]">
                    <Blue />
                    <h4>Blue</h4>
                  </div>
                  <div className="flex items-center gap-x-[4px]">
                    <Green />
                    <h4>Green</h4>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-x-[4px] mt-[18px] mb-[14px]">
                    <Orange />
                    <h4>Orange</h4>
                  </div>
                  <div className="flex items-center gap-x-[4px]">
                    <Purple />
                    <h4>Purple</h4>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-x-[4px] mt-[18px] mb-[14px]">
                    <Brown />
                    <h4>Brown</h4>
                  </div>
                  <div className="flex items-center gap-x-[4px]">
                    <Sky />
                    <h4>Sky</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className={`${
            viewMode === "activeList"
              ? "block"
              : "flex flex-wrap justify-center lg:gap-x-[53px] gap-y-[81px]"
          }`}
        >
          {viewMode == "activeList" ? (
            filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <div
                  key={index}
                  className={`${josefinSans.className} flex items-center gap-x-[15px] lg:gap-x-[32px] my-[15px] lg:my-[34px] lg:pl-[20px] py-[10px] lg:py-[20px] box-shadow3 cursor-pointer`}
                >
                  <Link href={`/ProductDetails/${item.id}`}>
                    <Image
                      alt={item.title}
                      src={item.thumbnail}
                      width={250}
                      height={250}
                      className="w-[150px] h-[100px] lg:w-[100%] lg:h-[100%] bg-[#F6F7FB]"
                    />
                  </Link>
                  <div className="w-[100%]">
                    <Link href={`/ProductDetails/${item.id}`}>
                      <div className="flex items-center gap-x-[8px] lg:gap-x-[18px]">
                        <div className="text-[#111C85] text-[14px] lg:text-[19px] font-bold">
                          {item.title}
                        </div>
                        <div className="hidden lg:block">
                          <CircleColor />
                        </div>
                      </div>
                      <div className="flex items-center gap-x-[10px] my-[5px] lg:my-[15px]">
                        <div className="text-[#151875] text-[12px] font-normal">
                          ${item.price}
                        </div>
                        {item.discountPercentage > 0 && (
                          <div className="text-[#FB2E86] text-[12px] font-normal line-through">
                            $
                            {(
                              (item.price / (100 - item.discountPercentage)) *
                              100
                            ).toFixed(2)}
                          </div>
                        )}
                        <div className="flex gap-x-[3px]">
                          {renderRating(item.rating)}
                        </div>
                      </div>
                      <div className="max-w-[691px] text-[#9295AA] text-[9px] lg:text-[17px] font-normal">
                        {item.description}
                      </div>
                    </Link>
                    <div
                      className="lg:hidden text-[#151875] text-[14px] font-normal mt-[12px]"
                      onClick={() => handleCart(item)}
                    >
                      Add to cart
                    </div>
                    <div
                      className="hidden lg:flex items-center gap-x-[20px] mt-[30px]"
                      onClick={() => handleCart(item)}
                    >
                      <div className="lg:w-[35px] lg:h-[35px] rounded-full pt-[10px] bg-[#fff] box-shadow4">
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
              ))
            ) : (
              <h4>No products found in this category.</h4>
            )
          ) : (
            products.map((item, index) => (
              <div key={index} className="w-[270px] group cursor-pointer">
                <div className="bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[100%] h-[280px] pt-[46px] rounded-[3px] relative overflow-hidden duration-300 ease-in-out cursor-pointer">
                  <div
                    className="absolute bottom-[-200px] group-hover:bottom-[15px] left-[15px] duration-300 ease-in-out"
                    onClick={() => handleCart(item)}
                  >
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
                  <Link href={`/ProductDetails/${item.id}`}>
                    <Image
                      alt={item.title}
                      src={item.thumbnail}
                      width={178}
                      height={178}
                      className="w-[178px] h-[178px] mx-auto"
                    />
                  </Link>
                </div>
                <Link href={`/ProductDetails/${item.id}`}>
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
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ProductsAPI;
