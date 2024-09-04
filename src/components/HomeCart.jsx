"use client";
import { Cart } from "@/assets/svg/Cart";
import { addToCart } from "@/components/ProductSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeCart = (item) => {
  let dispatch = useDispatch();
  let handleCart = (item) => {
    toast("Added to cart");
    dispatch(addToCart({ ...item, qun: 1 }));
  };

  return (
    <>
      <div
        className="w-[30px] h-[30px] rounded-full pt-[9px] bg-[#EEEFFB]"
        onClick={() => handleCart(item)}
      >
        <Cart />
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

export default HomeCart;
