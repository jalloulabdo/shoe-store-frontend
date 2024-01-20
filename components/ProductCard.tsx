import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getDiscountedPricePercentage } from "@/utils/helper";

const ProductCard = ({ data: { attributes: p, id } }: any) => {
  return (
    <div className="product-item col-lg-3 col-md-6 col-sm-6">
      <div className="image-holder">
        <Image
          width={500}
          height={500}
          className="product-image"
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
        />
      </div>
      <div className="cart-concern">
        <div className="cart-button d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="view-btn tooltip
                  d-flex"
          >
            <Link href={`/product/${p.slug}`}>
              <i className="icon icon-screen-full" />
              <span className="tooltip-text">view</span>
            </Link>
          </button>
          <button type="button" className="wishlist-btn">
            <i className="icon icon-heart" />
          </button>
        </div>
      </div>
      <div className="product-detail">
        <h3 className="product-title">
          <a href={`/product/${p.slug}`}>{p.name}</a>
        </h3>
        <div className="product-price">
          <strong>${p?.price}</strong>
          {p?.original_price && (
            <>
              <del>${p?.original_price}</del>
              <p className="pourcentage">
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
