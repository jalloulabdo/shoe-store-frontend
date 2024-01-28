"use client";

import React, { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../GlobalRedux/products/productSlice";
import { fetchCategory } from "@/app/GlobalRedux/category/categorySlice";
import { AppDispatch, RootState } from "../GlobalRedux/store";

import { motion, Variants } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const title = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      easing: "cubic-bezier(0.6, 0.01, 0.88, 0.99)",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const text = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      easing: "cubic-bezier(0.6, 0.01, 0.88, 0.99)",
      duration: 1.8,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};

const card = {
  show: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
  },
};
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
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          whileInView="show"
          exit="exit"
        >
          <div className="section-header">
            <motion.h2 className="section-title" variants={title}>
              Best selling products
            </motion.h2>
          </div>
          <ul className="tabs list-unstyled ">
            {categories?.[0]?.data !== null && (
              <motion.li
                className={`tab  ${slug == "" ? "active" : ""}`}
                variants={text}
                onClick={() => ChangeMenu("")}
              >
                All
              </motion.li>
            )}
            {categories?.[0]?.data.map((item) => (
              <motion.li
                data-tab-target={`#${item.attributes?.slug}`}
                variants={text}
                key={item.id}
                className={`tab  ${
                  item.attributes?.slug == slug ? "active" : ""
                }`}
                onClick={() => ChangeMenu(item.attributes?.slug)}
              >
                {item.attributes?.name}
              </motion.li>
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
        </motion.div>
      </section>
    </>
  );
};

export default ProductCardHome;
