import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { img, name, price } = product;
  return (
    <div className="col">
      <div className="card product">
        <img className="product-img" src={img} alt="" />
        <div className="product-info mt-3">
          <h4>{name}</h4>
          <h5>Price: ${price}</h5>
        </div>
        <button
          className="product-button btn btn-dark"
          onClick={() => addToCart(product)}
        >
          <div>
            Add To Cart
            <FontAwesomeIcon
              className="ms-3"
              icon={faShoppingCart}
            ></FontAwesomeIcon>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Product;
