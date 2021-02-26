import React from "react";
import { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const frist10 = fakeData.slice(0, 10);
  const [Products, setProducts] = useState(frist10);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log("added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {Products.map((pd) => (
          <Product product={pd} handleAddProduct={handleAddProduct}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
