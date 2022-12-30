import React from "react";
import "./product-card.css";

const ProductCard = (props) => {
  const { name, image, price } = props.item;

  return (
    <div id="menu" className="single__product">
      <div className="product__img">
        <img src={image} alt="" className="gambar" />
      </div>

      <div className="product__content">
        <div className="rating text-left">
          <br />
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
        </div>

        <h6>{name}</h6>

        <div className=" d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {" "}
            Price: $<span>{price}</span>
          </span>
          <span className="shopping__icon">
            <i class="ri-shopping-cart-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
