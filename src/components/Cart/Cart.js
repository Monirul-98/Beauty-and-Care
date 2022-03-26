import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  const { name } = cart;
  return (
    <div className="cart">
      <h1>Cart Summary</h1>
      <div>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Cart;
