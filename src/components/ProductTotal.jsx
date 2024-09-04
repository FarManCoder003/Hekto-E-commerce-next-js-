"use client";
import { useSelector } from "react-redux";

const ProductTotal = () => {
  const data = useSelector((state) => state.product.cartItem);
  const total = data.reduce((total, item) => total + item.price * item.qun, 0);
  const formattedTotal = total.toFixed(2);

  return formattedTotal;
};

export default ProductTotal;
