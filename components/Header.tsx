"use client";

import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { RootState, store } from "@/app/GlobalRedux/store";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
import fetchDataFromApi from "@/utils/api";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const { cartItems } = useSelector((state: RootState) => state.cart);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetchDataFromApi("/api/categories?populate=*");
    const data = await response.json();

    setCategories(data);
  };
  return (
    <header
      id="header"
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <div id="header-wrap">
        <nav className="secondary-nav border-bottom">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-4 header-contact">
                <p>
                  Let's talk! <strong>+212 641 687 853</strong>
                </p>
              </div>
              <div className="col-md-4 shipping-purchase text-center">
                <p>STUDENT DISCOUNT | GET 10% OFF YOUR ORDER</p>
              </div>
              <div className="col-md-4 col-sm-12 user-items">
                <ul className="d-flex justify-content-end list-unstyled">
                  <li>
                    <a href="login.html">
                      <i className="icon icon-user" />
                    </a>
                  </li>
                  <li>
                    <Link href="/cart">
                      <i className="icon icon-shopping-cart" />

                      {cartItems.length > 0 && (
                        <span className="countPill ">{cartItems.length}</span>
                      )}
                    </Link>
                  </li>

                  <li className="user-items search-item pe-3">
                    <a href="#" className="search-button">
                      <i className="icon icon-search" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav className="primary-nav padding-small">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-2 col-md-2">
                <div className="main-logo">
                  <Link href="/">
                    <img
                      src="/images/main-logo.png"
                      className="w-[40px] md:w-[60px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-10">
                <div className="navbar">
                  <div
                    id="main-nav"
                    className="stellarnav d-flex justify-content-end right"
                  >
                    <Menu
                      showCatMenu={showCatMenu}
                      setShowCatMenu={setShowCatMenu}
                      categories={categories}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
