"use client";

import React, { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../GlobalRedux/products/productSlice";
import { fetchCategory } from "@/app/GlobalRedux/category/categorySlice";
import { AppDispatch, RootState } from "../GlobalRedux/store";
const maxResult = 3;

const ProductCardHome = () => {
  const checkProducts = useRef(false);
  const [categoryIndex, setCategoryIndex] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [slug, setslug] = useState("");
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const { categories } = useSelector((state: RootState) => state.category);
  const urlProducts = "/api/products?populate=*" + categoryIndex;
  const url = "/api/categories?populate=*";

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (urlProducts && url) {
      dispatch(fetchProducts(urlProducts));
      dispatch(fetchCategory(url));
    }

    return () => {
      checkProducts.current = true;
    };
  }, [url, urlProducts]);

  const ChangeMenu = (value) => {
    if (value) {
      setCategoryIndex(`&[filters][categories][slug][$eq]=${value}`);
    } else {
      setCategoryIndex("");
    }
    setslug(value);
  };

  return (
    <>
      <section
        id="selling-products"
        className="product-store bg-light-grey padding-large"
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best selling products</h2>
          </div>
          <ul className="tabs list-unstyled ">
            {categories?.[0]?.data !== null && (
              <li
                className={`tab  ${slug == "" ? "active" : ""}`}
                onClick={() => ChangeMenu("")}
              >
                All
              </li>
            )}
            {categories?.[0]?.data.map((item) => (
              <li
                data-tab-target={`#${item.attributes?.slug}`}
                key={item.id}
                className={`tab  ${
                  item.attributes?.slug == slug ? "active" : ""
                }`}
                onClick={() => ChangeMenu(item.attributes?.slug)}
              >
                {item.attributes?.name}
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {loading && (
              <div className="loading ">
                <img src="/logo.svg" width={150} />
                <span className="text-2xl font-medium">Loading...</span>
              </div>
            )}
            <div id="all" data-tab-content="" className="active">
              <div className="row d-flex flex-wrap">
                {products &&
                  products?.[0]?.data.map((product) => (
                    <ProductCard key={product.id} data={product} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCardHome;
