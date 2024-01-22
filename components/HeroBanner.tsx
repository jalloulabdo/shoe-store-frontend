"use client";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <section id="billboard" className="overflow-hidden">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div onClick={clickHandler} className="button-prev">
            <i className="icon icon-chevron-left" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div onClick={clickHandler} className="button-next">
            <i className="icon icon-chevron-right" />
          </div>
        )}
      >
        <div
          className="swiper-slide"
          style={{
            backgroundImage: 'url("/images/banner4.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="banner-title">Summer Collection</h2>
                  <p>
                    At Ultras, we're not just selling shoes; we're offering a gateway to peak performance. Step into a world where passion meets precision, where your journey to greatness starts with the perfect pair of shoes.
                  </p>
                  <div className="btn-wrap space-btn-wrap">
                    <a
                      href="shop.html"
                      className="btn btn-light btn-medium d-flex align-items-center"
                      tabIndex={0}
                    >
                      Shop it now <i className="icon icon-arrow-io" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: 'url("/images/banner6.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="banner-title">Last Sizes, Crazy Prices </h2>
                  <p>
                    Discover the power of precision engineering and cutting-edge technology in every pair of Ultras. From the track to the court, our specialized sports shoes are crafted to enhance your performance, providing the support, comfort, and style you deserve.
                  </p>
                  <div className="btn-wrap space-btn-wrap">
                    <a
                      href="shop.html"
                      className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center"
                      tabIndex={0}
                    >
                      Shop it now <i className="icon icon-arrow-io" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroBanner;
