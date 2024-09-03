"use client";
import { Cart } from "@/assets/svg/Cart";
import { Color } from "@/assets/svg/Color";
import { Heart } from "@/assets/svg/Heart";
import { SearchPlus } from "@/assets/svg/SearchPlus";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

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

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts();
        setProducts(productData);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:[
      {
        breakpoint:640,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        }
      }
    ],
    appendDots: (dots) => {
      const activeIndex = dots.findIndex((dot) =>
        dot.props.className.includes("slick-active")
      );
      const dotsToShow = dots.slice(0, 4);

      return (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            position: "absolute",
            left: "50%",
            bottom: "-15px",
            transform: "translateX(-50%)",
          }}
        >
          <div className="w-[91px] h-[4px] flex gap-x-[6px]">
            {dotsToShow.map((dot, index) => (
              <div
                key={index}
                className={`h-[4px] rounded-[2px] ${
                  index === activeIndex % 4
                    ? "w-[21px] bg-[#FB2E86]"
                    : "w-[16px] bg-[#FEBAD7]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      );
    },
    customPaging: (i) => {
      const totalDots = 4;

      return (
        <div
          style={{
            height: "4px",
            width: "16px",
            borderRadius: "2px",
            backgroundColor: i % totalDots === 0 ? "#FB2E86" : "#FEBAD7",
          }}
        />
      );
    },
  };

  if (loading) return <></>;
  if (error) return <></>;

  return (
    <Slider {...settings}>
      {products.map((item, index) => (
        <div key={index} className="px-[10px] py-5 group">
          <div className="w-[275px] 2xl:w-[330px] mx-auto p-0 box-shadow">
            <div className="bg-[#F6F7FB] group-hover:bg-[#F7F7F7] w-full h-[200px] pt-[46px] relative overflow-hidden">
              <Link href={`/ProductDetails/${item.id}`}>
                <button
                  className={`${josefinSans.className} absolute bottom-[-50px] group-hover:bottom-[9px] left-[50%] translate-x-[-50%] w-[94px] h-[29px] rounded-[2px] bg-[#08D15F] text-[#fff] text-[12px] font-medium duration-300 ease-in-out`}
                >
                  View Details
                </button>
              </Link>
              <div className="absolute top-[11px] left-[-100px] group-hover:left-[11px] flex gap-[16px] items-center duration-300 ease-in-out">
                <div className="w-[30px] h-[30px] rounded-full pt-[8px] bg-[#EEEFFB]">
                  <Cart />
                </div>
                <div>
                  <Heart />
                </div>
                <div>
                  <SearchPlus />
                </div>
              </div>
              <Image
                alt={item.title}
                src={item.thumbnail}
                width={130}
                height={130}
                className="w-[130px] h-[130px] mx-auto"
              />
            </div>
            <div className="w-full h-[160px] px-1 text-center group-hover:bg-[#2F1AC4]">
              <div
                className={`${lato.className} text-[#FB2E86] group-hover:text-[#fff] text-[18px] font-bold py-[15px]`}
              >
                {item.title}
              </div>
              <div className="">
                <Color />
              </div>
              <div
                className={`${josefinSans.className} text-[#151875] group-hover:text-[#fff] text-[14px] font-normal py-[12px]`}
              >
                Code - {item.sku}
              </div>
              <div
                className={`${lato.className} text-[#151875] group-hover:text-[#fff] text-[14px] font-normal pb-[12px]`}
              >
                ${item.price}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
