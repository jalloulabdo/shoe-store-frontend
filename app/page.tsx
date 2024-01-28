"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCardHome from "./productCardHome/page";
import Head from "next/head";
import TestMonials from "./testiMonials/page";
import Link from "next/link";

import { motion, Variants } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      easing: "cubic-bezier(0.6, 0.01, 0.88, 0.99)",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export default function Home() {
  return (
    <>
      <main className="h-full">
        <HeroBanner />
        <Wrapper className="">
          {/* heading and paragaph start */}
          <section id="latest-collection " className="padding-medium">
            <motion.div
              className="container"
              variants={container}
              initial="hidden"
              whileInView="show"
              exit="exit"
            >
              <div className="product-collection row">
                <motion.div
                  className="col-lg-7 col-md-12 left-content"
                  variants={item}
                >
                  <div className="collection-item">
                    <div className="products-thumb">
                      <img
                        src="images/banner8.jpg"
                        alt="collection item"
                        className="large-image image-rounded"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                      <div className="categories first-title">
                        casual collection
                      </div>
                      <h3 className="item-title first-title">
                        Football Shoes.
                      </h3>
                      <p className="first-title">Refined Premium Comfort.</p>
                      <div className="btn-wrap">
                        <Link
                          href="/category/football-shoes"
                          className="d-flex align-items-center first-title"
                        >
                          shop collection <i className="icon icon-arrow-io" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="col-lg-5 col-md-12 right-content flex-wrap">
                  <motion.div
                    className="collection-item top-item"
                    variants={item}
                  >
                    <div className="products-thumb">
                      <img
                        src="images/jordan.jpg"
                        alt="collection item"
                        className="small-image image-rounded"
                      />
                    </div>
                    <div className="col-md-6 product-entry">
                      <div className="categories">Basic Collection</div>
                      <h3 className="item-title">Jordan shoes.</h3>
                      <div className="btn-wrap">
                        <Link
                          href="/category/jordan"
                          className="d-flex align-items-center"
                        >
                          shop collection <i className="icon icon-arrow-io" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="collection-item bottom-item"
                    variants={item}
                  >
                    <div className="products-thumb">
                      <img
                        src="images/banner10.jpg"
                        alt="collection item"
                        className="small-image image-rounded"
                      />
                    </div>
                    <div className="col-md-6 product-entry">
                      <div className="categories ">Best Selling Product</div>
                      <h3 className="item-title">Sneakers.</h3>
                      <div className="btn-wrap">
                        <Link
                          href="/category/sneakers"
                          className="d-flex align-items-center"
                        >
                          shop collection <i className="icon icon-arrow-io" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
          <section id="subscribe" className="padding-medium">
            <motion.div
              className="container"
              variants={container}
              initial="hidden"
              whileInView="show"
              exit="exit"
            >
              <div className="row">
                <motion.div className="block-text col-md-6" variants={item}>
                  <div className="section-header-center">
                    <h2 className="section-title">
                      Get 25% off Discount Coupons
                    </h2>
                  </div>
                  <p></p>
                </motion.div>
                <motion.div
                  className="subscribe-content col-md-6"
                  variants={item}
                >
                  <form id="form" className="d-flex justify-content-between">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email addresss here"
                    />
                    <button className="btn btn-dark">Subscribe Now</button>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </section>
          {/* heading and paragaph end */}
          <ProductCardHome />
          {/* products grid start */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            <ProductCardGlobal />
          </div> */}
          <TestMonials />
        </Wrapper>
      </main>
    </>
  );
}
