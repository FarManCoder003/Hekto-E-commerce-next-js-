import { createSlice } from "@reduxjs/toolkit";

const getInitialStateFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};
const initialState = {
  cartItem: getInitialStateFromLocalStorage(),
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findProduct !== -1) {
        state.cartItem[findProduct].qun += 1;
      } else {
        state.cartItem = [...state.cartItem, action.payload];
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
    },
    productIncrement: (state, action) => {
      state.cartItem[action.payload].qun += 1;
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
    },
    productDecrement: (state, action) => {
      if (state.cartItem[action.payload].qun > 1) {
        state.cartItem[action.payload].qun -= 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(state.cartItem));
        }
      }
    },
    removeProduct: (state, action) => {
      state.cartItem.splice(action.payload, 1);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
    },
    removeAll: (state) => {
      state.cartItem = [];
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
    },
  },
});

export const {
  addToCart,
  productIncrement,
  productDecrement,
  removeProduct,
  removeAll,
} = productSlice.actions;

export default productSlice.reducer;
