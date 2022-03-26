import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const productNames = [];
  for (const product of cart) {
    productNames.push(product.name);
  }
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <div>
        <h4>{productNames}</h4>
      </div>
    </div>
  );
};

export default Cart;
