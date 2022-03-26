import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import Cart from "../Cart/Cart";
import "./Store.css";

const Store = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="store-container my-5">
      <div className="product-container row row-cols-1 row-cols-md-3 g-4">
        {items.map((item) => (
          <Product key={item.id} product={item} addToCart={addToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Store;
