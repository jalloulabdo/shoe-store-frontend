"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { useSelector } from "react-redux";
import { RootState, store } from "@/app/GlobalRedux/store";

import CartItem from "@/components/CartItem";

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Page = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState(false);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <section className="site-banner padding-small bg-light-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">
                  <a href="shop.html">Shop /</a>
                </span>
                <span className="item">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {cartItems.length > 0 && (
        <section className="shopify-cart padding-large">
          <div className="shopify-cart-second">
            <Wrapper className="">
              {cartItems.length > 0 && (
                <>
                  {/* CART CONTENT START */}
                  <div className="cart-item">
                    {/* CART ITEMS START */}
                    <div className="cart-item-flex">
                      <div className="cart-item-text">Cart Items</div>
                      {cartItems.map((item) => (
                        <CartItem key={item.id} data={item} />
                      ))}
                    </div>
                    {/* CART ITEMS END */}

                    {/* SUMMARY START */}
                    <div className="flex-[1]">
                      <div className="summary-text">Summary</div>

                      <div className="subtotal-div">
                        <div className="subtotal-div-sec">
                          <div className="subtotal-title">Subtotal</div>
                          <div className="subtotal-text">${subTotal}</div>
                        </div>
                        <div className="subtotal-disc">
                          The subtotal reflects the total price of your order,
                          including duties and taxes, before any applicable
                          discounts. It does not include delivery costs and
                          international transaction fees.
                        </div>
                      </div>

                      {/* BUTTON START */}
                      <button onClick={handlePayment} className="checkout-btn">
                        Checkout
                        {loading && <img src="/spinner.svg" />}
                      </button>
                      {/* BUTTON END */}
                    </div>
                    {/* SUMMARY END */}
                  </div>
                  {/* CART CONTENT END */}
                </>
              )}

              {/* This is empty screen */}

              {cartItems.length < 1 && (
                <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                  <Image
                    src="/empty-cart.jpg"
                    width={300}
                    height={300}
                    className="w-[300px] md:w-[400px]"
                    alt="cart"
                  />
                  <span className="text-xl font-bold">Your cart is empty</span>
                  <span className="text-center mt-4">
                    Looks like you have not added anything in your cart.
                    <br />
                    Go ahead and explore top categories.
                  </span>
                  <Link
                    href="/"
                    className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                  >
                    Continue Shopping
                  </Link>
                </div>
              )}
            </Wrapper>
          </div>
        </section>
      )}

      {cartItems.length < 1 && (
        <section className="shopify-cart padding-large">
          <div className="cart-empty">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="cart-image"
              alt="cart"
            />
            <span className="cart-text-xl">Your cart is empty</span>
            <span className="cart-text ">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link href="/" className="cart-link">
              Continue Shopping
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Page;
