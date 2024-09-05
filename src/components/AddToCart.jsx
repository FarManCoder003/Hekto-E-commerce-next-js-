"use client";
import { Cut } from "@/assets/svg/Cut";
import {
  productDecrement,
  productIncrement,
  removeAll,
  removeProduct,
} from "@/components/ProductSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const fetchProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Fetching error:", error);
    return [];
  }
};

const AddToCart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.cartItem);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };
    loadProducts();
  }, []);

  let handleIncrement = (index) => {
    if (data[index].qun < data[index].stock) {
      dispatch(productIncrement(index));
    }
  };
  let handleDecrement = (index) => {
    dispatch(productDecrement(index));
  };
  let handleRemove = (index) => {
    dispatch(removeProduct(index));
  };
  let handleClear = () => {
    dispatch(removeAll());
  };

  return (
    <>
      {data.length === 0 ? (
        <>
          <div className="text-[#15245E] text-[14px] font-bold text-center">
            Your cart is empty.
          </div>
          <div className="w-full text-center">
            <Link href="/">
              <button className="w-[134px] h-[39px] bg-[#FB2E86] rounded-[2px] text-[#fff] text-[16px] font-semibold mt-[30px]">
                Back to Home
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between lg:justify-normal pb-[15px] mb-[15px] border-b border-b-[#E1E1E4]"
            >
              <div className="w-[195px] lg:w-[265px] lg:mr-[30px]">
                <div className="flex items-center gap-x-[17px]">
                  <div className="relative w-[50px] h-[50px] lg:w-[70%] lg:h-[100%] bg-[#F4F4FC] rounded-[3px]">
                    <Image
                      src={item.thumbnail}
                      width="500"
                      height="500"
                      alt={item.title}
                      className="w-[100%] h-[100%] lg:w-[83px] lg:h-[87px]"
                    />
                    <div
                      className="absolute w-[12px] h-[12px] top-[-6px] right-[-6px] cursor-pointer"
                      onClick={() => handleRemove(index)}
                    >
                      <Cut />
                    </div>
                  </div>
                  <div className="w-[150px] lg:w-full">
                    <div className="text-[#000] text-[14px] font-medium lg:pt-[10px]">
                      {item.title}
                    </div>
                    <div className="text-[#A1A8C1] text-[12px] font-normal pt-[7px]">
                      Brand:
                      {item.brand > 1 ? (
                        <span className="">{item.brand}</span>
                      ) : (
                        <span className="">Unknown</span>
                      )}
                    </div>
                    <div className="text-[#A1A8C1] text-[12px] font-normal">
                      {item.stock > 0 ? (
                        <div className="">Stock: {item.stock}</div>
                      ) : (
                        <div className="">{item.availabilityStatus}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[70px] text-[#15245E] text-[14px] font-semibold">
                  ${item.price}
                </div>
              </div>
              <div className="ml-[50px] lg:ml-[122px] lg:mr-[140px]">
                <div className="w-[51px] h-[20px] flex justify-between bg-[#F0EFF2]">
                  <div
                    className="w-[12px] h-[20px] bg-[#E7E7EF] text-[#BEBFC2] text-[12px] text-center cursor-pointer"
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </div>
                  <div className="text-[#BEBFC2] text-[12px] font-normal">
                    {item.qun}
                  </div>
                  <div
                    className="w-[12px] h-[20px] bg-[#E7E7EF] text-[#BEBFC2] text-[12px] text-center cursor-pointer"
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-[70px] text-[#15245E] text-[14px] font-semibold">
                  £{(item.price * item.qun).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <button className="w-[134px] h-[39px] bg-[#FB2E86] rounded-[2px] text-[#fff] text-[16px] font-semibold mt-[30px]">
              Update Cart
            </button>
            <button
              className="w-[134px] h-[39px] bg-[#FB2E86] rounded-[2px] text-[#fff] text-[16px] font-semibold mt-[30px]"
              onClick={handleClear}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default AddToCart;
