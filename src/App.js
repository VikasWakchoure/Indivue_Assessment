// App.js
import React, { useState } from "react";
import Product from "./Components/Product";
import HairOil from "./Components/HairOil";
import FaceWash from "./Components/FaceWash";
import Shampoo from "./Components/Shampoo";
import Soap from "./Components/Soap";

import jsonData from "../jsonData.json";
import "./Apps.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(
      "Product added to the cart:",
      product.name,
      "- Price:",
      product.price
    );
    console.log("List of products present in cart array:", cart);
  };

  const removeFromCart = (productName) => {
    const updatedCart = cart.filter((item) => item.name !== productName);
    setCart(updatedCart);
    console.log("Product removed from the cart.");
    console.log("List of products present in cart array:", updatedCart);
  };

  return (
    <div>
      {jsonData.data.map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          {category.productList.map((product) => (
            <Product
              key={product.name}
              product={product}
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
            />
          ))}
        </div>
      ))}
      <div id="cart-container">
        <h2>Cart</h2>
        <ul id="cart-list">
          {cart.map((item) => (
            <li key={item.name}>
              {item.name} <br />
              {item.price}
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default App;
