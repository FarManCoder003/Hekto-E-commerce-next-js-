"use client";
import productSlice from "@/components/ProductSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    product: productSlice,
  },
});
