import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
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
      <div className="product-container row row-cols-1 row-cols-md-3 g-4">
        {items.map((item) => (
          <Product key={item.id} product={item}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>Cart Summary</h1>
      </div>
    </div>
  );
};

export default Store;
