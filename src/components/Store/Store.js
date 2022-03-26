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
    let newCart = [];
    if (cart.length < 4) {
      newCart = [...cart, product];
      setCart(newCart);
    } else {
      alert("Sorry!You can't add more than 4 products");
    }
  };
  const chooseOne = (cartItems) => {
    const randomNum = Math.floor(Math.random() * 4);
    if (cartItems[randomNum]) {
      alert(cartItems[randomNum].name);
    }
  };
  return (
    <div className="store-container my-5">
      <div className="product-container row row-cols-1 row-cols-md-3 g-4">
        {items.map((item) => (
          <Product key={item.id} product={item} addToCart={addToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3>Order Summary</h3>
        <div>
          {cart.map((cartItem) => (
            <Cart key={cartItem.id} cartItem={cartItem}></Cart>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => chooseOne(cart)}
        >
          Choose the best
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-outline-danger">
          Remove all
        </button>
      </div>
    </div>
  );
};

export default Store;
