"use client";

import React, { useState, useRef, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ReactMarkdown from "react-markdown";

import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { getDiscountedPricePercentage } from "@/utils/helper";

import { fetchProduct } from "@/app/GlobalRedux/products/productDetailSlice";
import { fetchProducts } from "@/app/GlobalRedux/products/productSlice";
import { RootState, store } from "@/app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/app/GlobalRedux/cart/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ params }) => {
  const [selectedSize, setSelectedSize] = useState();
  const chackProduct = useRef(false);
  const [showError, setShowError] = useState(false);

  const { product, loading } = useSelector((state: RootState) => state.product);

  const path = params.productId;
  const urlDeatil = `/api/products?populate=*&filters[slug][$eq]=${path}`;
  const url = `/api/products?populate=*&[filters][slug][$ne]=${path}`;

  const dispatch = useDispatch();
  const p = product?.[0]?.data?.[0]?.attributes;
  const sizesGridElement = document.getElementById("sizesGrid");
  useEffect(() => {
    if (chackProduct.current === false) {
      store.dispatch(fetchProduct(urlDeatil));
      store.dispatch(fetchProducts(url));
    }

    return () => {
      chackProduct.current = true;
    };
  }, [url]);

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <section className="site-banner padding-small bg-light-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index.html"></a>
                </span>
                <span className="item">
                  <a href="shop.html">Shop /</a>
                </span>
                <span className="item">{p?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="single-product padding-large">
        <ToastContainer />

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="w-full md:w-auto flex-[1.5] max-w-[300px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCarousel images={p?.image.data} />
              </div>
            </div>
            <div className="col-md-7">
              {loading && (
                <div className="loading ">
                  <img src="/logo.svg" width={150} />
                  <span className="text-2xl font-medium">Loading...</span>
                </div>
              )}
              <div className="product-info">
                <div className="element-header">
                  <h2 itemProp="name" className="product-title">
                    {p?.name}
                  </h2>
                  <div className="rating-container d-flex align-items-center">
                    <span className="rating-count">{p?.subtitle}</span>
                  </div>
                </div>
                <div className="product-price">
                  <strong>${p?.price}</strong>
                  {p?.original_price && (
                    <>
                      <del>${p?.original_price}</del>
                      <p className="pourcentage">
                        {getDiscountedPricePercentage(
                          p.original_price,
                          p.price
                        )}
                        % off
                      </p>
                    </>
                  )}
                </div>
                <div className="rating-container d-flex align-items-center">
                  <span className="rating-count">incl. of taxes</span>
                </div>
                <div className="rating-container d-flex align-items-center">
                  <span className="rating-count">{`(Also includes all applicable duties)`}</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla praesentium velit illo eveniet deserunt fuga a soluta
                  tenetur, minus earum quasi pariatur quos accusamus corrupti,
                  laborum esse non sint harum.
                </p>
                <div className="cart-wrap margin-small">
                  <div className="swatch product-select" data-option-index={1}>
                    <h4 className="item-title no-margin">Select Size:</h4>
                    <div id="sizesGrid" className="sizesGrid">
                      {p?.size.data.map((item, i) => (
                        <div
                          key={i}
                          className={`size-border ${
                            item.enabled
                              ? "hover:border-black cursor-pointer"
                              : "not-allowed"
                          } ${
                            selectedSize === item.size ? "border-black" : ""
                          }`}
                          onClick={() => {
                            setSelectedSize(item.size);
                            setShowError(false);
                          }}
                        >
                          {item.size}
                        </div>
                      ))}
                    </div>
                    {/* SHOW ERROR START */}
                    {showError && (
                      <div className="erro-msg">Size selection is required</div>
                    )}
                    {/* SHOW ERROR END */}
                  </div>

                  <div className="action-buttons">
                    <button
                      className="btn btn-medium btn-dark"
                      onClick={() => {
                        if (!selectedSize) {
                          setShowError(true);
                          if (sizesGridElement !== null) {
                            sizesGridElement.scrollIntoView({
                              block: "center",
                              behavior: "smooth",
                            });
                          }
                        } else {
                          dispatch(
                            addToCart({
                              ...product?.[0]?.data?.[0],
                              selectedSize,
                              oneQuantityPrice: p.price,
                            })
                          );
                          notify();
                        }
                      }}
                    >
                      <span id="add-to-cart">Add to cart</span>
                    </button>
                    <button type="submit" className="btn btn-medium btn-dark">
                      <i className="icon icon-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
