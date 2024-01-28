"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./GlobalRedux/provider";
import Script from "next/script";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
        <link rel="stylesheet" type="text/css" href="/icomoon/icomoon.css" />
        <link rel="stylesheet" type="text/css" href="/css/vendor.css" />
        <link rel="stylesheet" type="text/css" href="/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Ultras</title>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
        <div className="search-popup">
          <div className="search-popup-container">
            <form role="search" method="get" className="search-form" action="">
              <input
                type="search"
                id="search-form"
                className="search-field"
                placeholder="Type and press enter"
                defaultValue=""
                name="s"
              />
              <button type="submit" className="search-submit">
                <a href="#">
                  <i className="icon icon-search" />
                </a>
              </button>
            </form>
            <h5 className="cat-list-title">Browse Categories</h5>
            <ul className="cat-list">
              <li className="cat-list-item">
                <a href="shop.html" title="Men Jackets">
                  Men Jackets
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Fashion">
                  Fashion
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Casual Wears">
                  Casual Wears
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Women">
                  Women
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Trending">
                  Trending
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Hoodie">
                  Hoodie
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Kids">
                  Kids
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Providers>
          <Header></Header>
          {children}
          <Footer />
        </Providers>
      </body>

      <Script src="/js/jquery-1.11.0.min.js" />
      <Script src="/js/plugins.js" />
      <Script src="/js/script.js" />
    </html>
  );
}
