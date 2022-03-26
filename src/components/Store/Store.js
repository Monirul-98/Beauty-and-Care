import React, { useEffect, useState } from "react";
import "./Store.css";

const Store = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="store-container">
      <div className="product-container">
        <h2>This is from store</h2>
      </div>
      <div className="cart-container">
        <h1>Cart Summary</h1>
      </div>
    </div>
  );
};

export default Store;
