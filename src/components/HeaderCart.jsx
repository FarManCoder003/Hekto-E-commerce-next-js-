import { NavCart } from "@/assets/svg/NavCart";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const HeaderCart = () => {
  let data = useSelector((state) => state.product.cartItem);
  let [cartShow, setCartShow] = useState(false);
  let [userCartShow, setUserCartShow] = useState(false);
  let userRef = useRef();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (userRef.current.contains(e.target) == true) {
        setUserCartShow(!userCartShow);
      } else {
        setUserCartShow(false);
      }
    });
  }, [cartShow]);

  return (
    <>
      <div ref={userRef} className="">
        {data.length > 0 ? (
          <div className="relative">
            <Link href="/Cart">
              <NavCart />
            </Link>
            <div className="absolute h-[15px] leading-[13px] w-[15px] bg-[white] left-[20px] top-[-10px] rounded-full text-[10px] font-sans text-center text-[#7E33E0]">
              {data.length}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default HeaderCart;
