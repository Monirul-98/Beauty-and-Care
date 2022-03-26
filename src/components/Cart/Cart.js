import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cartItem }) => {
  const { name, img } = cartItem;
  return (
    <div className="cart">
      <div>
        <img src={img} alt="" className="cart-img" />
        <h6>{name}</h6>
      </div>
      <a href="/remove" className="btn-icon">
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Cart;
