"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const fetchProducts = async (productId) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetching error:", error);
    return null;
  }
};

const ProductDetails = ({ productId }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchProducts(productId);
      if (data) {
        setItem(data);
        setError(null);
      } else {
        setError("Failed to fetch product details.");
      }
      setLoading(false);
    };

    fetchData();
  }, [productId]);

  if (loading) return <></>;
  if (error) return <></>;

  return (
    <div className="w-[1170px] h-[509px] px-[13px] py-[9px]">
      <div className="flex">
        <div className="">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={152}
            height={155}
            className="bg-[#F6F7FB]"
          />
          <Image
            src={item.thumbnail}
            alt={item.name}
            width={152}
            height={155}
            className="bg-[#F6F7FB] my-[11px]"
          />
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={152}
            height={155}
            className="bg-[#F6F7FB]"
          />
        </div>
        <div className="w-[375px] h-[487px] ml-[21px] mr-[41px]">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={375}
            height={487}
            className="w-[375px] h-[487px] bg-[#F6F7FB]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
