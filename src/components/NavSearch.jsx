"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const fetchProducts = async () => {
  try {
    const res = await fetch(
      "https://dummyjson.com/products?limit=0&sortBy=title"
    );
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Fetching error:", error);
    return [];
  }
};

const NavSearch = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };
    loadProducts();
  }, []);

  let [searchInput, setSearchInput] = useState("");
  let [searchFilter, setSearchFilter] = useState([]);
  let [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleInput = useCallback(
    (e) => {
      const value = e.target.value;
      setSearchInput(value);
      if (value === "") {
        setSearchFilter([]);
      } else {
        const filteredProducts = products.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        );
        setSearchFilter(filteredProducts);
      }
    },
    [products]
  );
  const handleSingleSearch = (id) => {
    router.push(`/ProductDetails/${id}`);
    setSearchFilter([]);
    setSearchInput("");
  };
  let handleKey = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setSelectedItemIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case "ArrowDown":
        setSelectedItemIndex((prevIndex) =>
          Math.min(prevIndex + 1, searchFilter.length - 1)
        );
        break;
      case "Enter":
        if (selectedItemIndex !== -1) {
          handleSingleSearch(searchFilter[selectedItemIndex].id);
        }
        break;
      default:
    }
    if (selectedItemIndex !== -1) {
      const selectedItemElement = document.getElementById(
        `searchItem-${selectedItemIndex}`
      );
      if (selectedItemElement) {
        selectedItemElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };
  return (
    <>
      <div className="w-[266px] relative">
        <input
          value={searchInput}
          onKeyUp={handleKey}
          onChange={handleInput}
          type="text"
          className="w-[266px] h-[40px] pl-[10px] bg-[#D9D9D9] outline-none"
        />
        {searchFilter.length > 0 && (
          <div className="w-[316px] max-h-[428px] bg-[#F6F7FB] overflow-y-auto z-50 absolute  left-0">
            {searchFilter.map((item, index) => (
              <div
                key={item.id}
                id={`searchItem-${index}`}
                className={`py-3 cursor-pointer hover:bg-[#D9D9D9] ${
                  index === selectedItemIndex ? "bg-[#D9D9D9]" : ""
                }`}
                onClick={() => handleSingleSearch(item.id)}
              >
                <div className="flex items-center">
                  <div className="w-[180px] h-[120px]">
                    <Image
                      key={index}
                      src={item.thumbnail}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="w-[120px] mb-[25px]"
                    />
                  </div>
                  <div className="text-[14px] font-bold text-[#0D0E43]">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavSearch;
