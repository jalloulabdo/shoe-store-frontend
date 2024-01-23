import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/app/GlobalRedux/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const product = data.attributes;

  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className="cart-detail">
      {/* IMAGE START */}
      <div className="cart-detail-sc">
        <Image
          src={product.thumbnail.data.attributes.url}
          alt={product.name}
          width={120}
          height={120}
        />
      </div>
      {/* IMAGE END */}

      <div className="cart-product">
        <div className="cart-product-title">
          <div className="cart-product-title-sub">
            {/* PRODUCT TITLE */}
            <div className="cart-product-name">{product.name}</div>

            {/* PRODUCT SUBTITLE */}
            <div className="cart-product-subtitle">{product.subtitle}</div>
          </div>

          <div className="cart-product-title-price">
            {/* PRODUCT PRICE */}
            <div className="cart-product-price"> ${product.price}</div>
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        {/* <div className="cart-product-subtitle">{product.subtitle}</div> */}

        <div className="block-size">
          <div className="size-item">
            <div className="size-item-sec">
              <div className="font-semibold">Size:</div>
              <select
                className="select-size"
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {product.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="quantity-item">
              <div className="font-semibold">Quantity:</div>
              <select
                className="quantity-select"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="delete-item"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
