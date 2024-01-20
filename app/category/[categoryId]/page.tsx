"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "@/app/GlobalRedux/category/categorySlice";
import { fetchProducts } from "@/app/GlobalRedux/products/productSlice";
import { RootState, store } from "@/app/GlobalRedux/store";
import fetchDataFromApi from "@/utils/api";
import useSWR from "swr";

const maxResult = 4;

const CategoryDetail = ({ params }) => {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(1);

  const chackCategory = useRef(false);
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );
  const { categories } = useSelector((state: RootState) => state.category);
  const path = params.categoryId;

  const url = "/api/categories?filters[slug][$eq]=" + path;
  const urlProducts =
    "/api/products?populate=*&[filters][categories][slug][$eq]=" +
    path +
    "&pagination[page]=" +
    pageIndex +
    "&pagination[pageSize]=" +
    maxResult;
  const dispatch = useDispatch();

  useEffect(() => {
    setPageIndex(1);
  }, []);

  useEffect(() => {
    if (urlProducts && url) {
      store.dispatch(fetchCategory(url));
      store.dispatch(fetchProducts(urlProducts));
    }

    return () => {
      chackCategory.current = true;
    };
  }, [url, urlProducts]);

  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${path}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      fallbackData: products,
    }
  );

  return (
    <>
      <section
        className="site-banner jarallax min-height300 padding-large"
        style={{
          background: "url(/images/hero-image.jpg) no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Categories</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">
                  {categories?.[0]?.data?.[0]?.attributes?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="shopify-grid padding-large">
        <div className="container">
          <div className="row">
            <section id="selling-products" className="col-md-12 product-store">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">
                    {categories?.[0]?.data?.[0]?.attributes?.name}
                  </h2>
                </div>
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
                  {products?.[0]?.meta?.pagination?.total > maxResult && (
                    <nav
                      className="navigation paging-navigation text-center padding-medium"
                      role="navigation"
                    >
                      <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                        <button
                          className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                          disabled={pageIndex === 1}
                          onClick={() => setPageIndex(pageIndex - 1)}
                        >
                          Previous
                        </button>

                        <span className="font-bold">{`${pageIndex} of ${
                          products?.[0] &&
                          products?.[0]?.meta.pagination.pageCount
                        }`}</span>

                        <button
                          className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                          disabled={
                            pageIndex ===
                            (products?.[0] &&
                              products?.[0]?.meta.pagination.pageCount)
                          }
                          onClick={() => setPageIndex(pageIndex + 1)}
                        >
                          Next
                        </button>
                      </div>
                    </nav>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
