import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <>
      <section id="shipping-information">
        <hr />
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center justify-content-between">
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-truck" />
                <h4 className="block-title">
                  <strong>Free shipping</strong> Over $200
                </h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-return" />
                <h4 className="block-title">
                  <strong>Money back</strong> Return within 7 days
                </h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-tags1" />
                <h4 className="block-title">
                  <strong>Buy 4 get 5th</strong> 50% off
                </h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-help_outline" />
                <h4 className="block-title">
                  <strong>Any questions?</strong> experts are ready
                </h4>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <footer id="footer">
        <div className="container">
          <div className="footer-menu-list">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Ultras</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <Link href="/about">About us</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Customer Service</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <a href="faqs.html">FAQ</a>
                    </li>
                    <li className="menu-item">
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Returns &amp; Refunds</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Cookie Guidelines</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Contact Us</h5>
                  <p>
                    Do you have any questions or suggestions?{" "}
                    <a href="#" className="email">
                      ourservices@ultras.com
                    </a>
                  </p>
                  <p>
                    Do you need assistance? Give us a call. <br />
                    <strong>+212 641 687 853</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Shoes 2024</h5>
                  <p>
                    Run, Gym, Hike... It doesn't matter whether you're an elite
                    runner, weekend fell walker or gym enthusiast, that
                    commitment and passion to be active is what drives us both.
                    With over 13,000 products, including running shoes, running
                    clothing and outdoor gear, you’ll struggle to find a better
                    selection. We are very proud to bring you the very latest
                    products and technologies from the top sports and fitness
                    brands, including adidas, Asics, Inov8 and many more.
                  </p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled">
                      <li>
                        <a href="#">
                          <i className="icon icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-youtube-play" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-behance-square" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </footer>
      <div id="footer-bottom">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap justify-content-between">
            <div className="copyright"></div>
            <div className="payment-method">
              <p>Payment options :</p>
              <div className="card-wrap">
                <img src="/images/visa-icon.jpg" alt="visa" />
                <img src="/images/mastercard.png" alt="mastercard" />
                <img
                  src="/images/american-express.jpg"
                  alt="american-express"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
