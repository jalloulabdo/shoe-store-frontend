"use client";

import React, { useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../GlobalRedux/products/productSlice";
import { AppDispatch, RootState } from "../GlobalRedux/store";

const ProductCardGlobal = () => {
  const checkProducts = useRef(false);
  const { products } = useSelector((state: RootState) => state.products);
  const url = "/api/products?populate=*";
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (checkProducts.current === false) {
      dispatch(fetchProducts(url));
    }

    return () => {
      checkProducts.current = true;
    };
  }, []);
  return (
    <>
      {products.length > 0 &&
        products[0]?.data?.map((product) => (
          // Your rendering logic here
          <ProductCard key={product.id} data={product} />
        ))}
    </>
  );
};

export default ProductCardGlobal;
