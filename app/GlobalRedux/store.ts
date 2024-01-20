"use clinet";

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productSlice";
import productReducer from "./products/productDetailSlice";
import categoryReducer from "./category/categorySlice";
import cartReducer from "./cart/cartSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
      product: productReducer,
      category: categoryReducer,
      cart: cartReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
