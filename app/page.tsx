import Image from "next/image";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCardHome from "./productCardHome/page";
import Head from "next/head";
import TestMonials from "./testiMonials/page";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="h-full">
        <HeroBanner />
        <Wrapper className="">
          {/* heading and paragaph start */}
          <section id="latest-collection " className="padding-medium">
            <div className="container">
              <div className="product-collection row">
                <div className="col-lg-7 col-md-12 left-content">
                  <div className="collection-item">
                    <div className="products-thumb">
                      <img
                        src="images/collection-item1.jpg"
                        alt="collection item"
                        className="large-image image-rounded"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                      <div className="categories">casual collection</div>
                      <h3 className="item-title">Football Shoes.</h3>
                      <p>Refined Premium Comfort.</p>
                      <div className="btn-wrap">
                        <Link
                          href="/category/football-shoes"
                          className="d-flex align-items-center"
                        >
                          shop collection <i className="icon icon-arrow-io" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 right-content flex-wrap">
                  <div className="collection-item top-item">
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
                  </div>
                  <div className="collection-item bottom-item">
                    <div className="products-thumb">
                      <img
                        src="images/collection-item3.jpg"
                        alt="collection item"
                        className="small-image image-rounded"
                      />
                    </div>
                    <div className="col-md-6 product-entry">
                      <div className="categories">Best Selling Product</div>
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
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="subscribe" className="padding-medium">
            <div className="container">
              <div className="row">
                <div className="block-text col-md-6">
                  <div className="section-header-center">
                    <h2 className="section-title">
                      Get 25% off Discount Coupons
                    </h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dictumst amet, metus, sit massa posuere maecenas. At tellus
                    ut nunc amet vel egestas.
                  </p>
                </div>
                <div className="subscribe-content col-md-6">
                  <form id="form" className="d-flex justify-content-between">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email addresss here"
                    />
                    <button className="btn btn-dark">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
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
