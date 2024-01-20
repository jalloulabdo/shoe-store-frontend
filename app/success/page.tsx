import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Page = () => {
  return (
    <section id="thank-you" className="padding-large bg-light-grey">
      <div className="container">
        <div className="row">
          <div className="page-header col-md-6">
            <div className="section-header">
              <h1 className="page-title">Thanks for shopping with us!</h1>
              <p> Your order has been placed Pagefully.</p>
            </div>
          </div>
          <div className="contact-information">
            <div className="col-md-6">
              <div className="section-header">
                <h2 className="section-title">
                  {" "}
                  For any product related query, drop an email to
                </h2>
              </div>
              <div className="row">
                <div className="d-flex flex-wrap bg-light">
                  <div className="col-md-6 border-right border-bottom">
                    <div className="detail">
                      <h3>Phones</h3>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon icon-phone" />
                          +1650-243-00023
                        </li>
                        <li>
                          <i className="icon icon-phone" />
                          +1650-243-00021
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 border-bottom">
                    <div className="detail">
                      <h3>Emails</h3>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon icon-envelope" />
                          <a href="mailto:info@yourcompany.com">
                            shoeshopcontact@shop.com
                          </a>
                        </li>
                        <li>
                          <i className="icon icon-envelope" />
                          <a href="mailto:info@yourcompany.com">
                            shoeshopcontact@shop.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 border-right">
                    <div className="address detail">
                      <h3>Address</h3>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon icon-location" />
                          <span>North Melbourne VIC 3051, Australia</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail">
                      <h3>Social Links</h3>
                      <ul className="social-links list-unstyled d-flex">
                        <li>
                          <a href="#" className="icon icon-facebook" />
                        </li>
                        <li>
                          <a href="#" className="icon icon-twitter" />
                        </li>
                        <li>
                          <a href="#" className="icon icon-youtube-play" />
                        </li>
                        <li>
                          <a href="#" className="icon icon-behance-square" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
