import React from "react";

const Page = () => {
  return (
    <section id="testimonials" className="padding-large ">
      <div className="container">
        <div className="reviews-content">
          <div className="row d-flex flex-wrap">
            <div className="col-md-2">
              <div className="review-icon">
                <i className="icon icon-right-quote" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="swiper testimonial-swiper overflow-hidden">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-detail">
                      <p>
                        “I recently purchased a pair of running shoes from this
                        store, and I couldn't be happier! The comfort is
                        unmatched, and the stylish design is a bonus. They
                        provide excellent support for my runs, making them my
                        go-to choice for any workout. Highly recommend!.”
                      </p>
                      <div className="author-detail">
                        <div className="name">By Maggie Rio</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-detail">
                      <p>
                        “These shoes are fantastic for my intense workouts. The
                        performance and durability are top-notch. However, I
                        recommend sizing up as they run a bit small. Despite
                        that, I'm extremely satisfied with my purchase and would
                        buy from this store again.”
                      </p>
                      <div className="author-detail">
                        <div className="name">By John Smith</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-detail">
                      <p>
                        “I bought these shoes for both running and everyday
                        wear, and they've exceeded my expectations. The sleek
                        design allows me to seamlessly transition from the gym
                        to casual outings. The only reason for not giving 5
                        stars is that they could use a bit more cushioning.
                        Overall, a great purchase.”
                      </p>
                      <div className="author-detail">
                        <div className="name">By samuel eto'o</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-arrows">
                <button className="prev-button">
                  <i className="icon icon-arrow-left" />
                </button>
                <button className="next-button">
                  <i className="icon icon-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
