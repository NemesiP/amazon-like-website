import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import ProductList from "./components/ProductList.js";

export default function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsFromDB, setProductsFromDB] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3300/products");
      const data = await response.json();
      setProductsFromDB(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, item) => acc + item.price, 0));
    getProducts();
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + parseFloat(product.price));
  };

  const handleRemoveItem = (price) => {
    setCart(cart.filter((item) => item.price !== price));
    setTotalPrice(totalPrice - price);
  };

  return (
    <div>
      <Header
        cart={cart}
        totalPrice={totalPrice}
        onRemoveItem={handleRemoveItem}
      />
      <ProductList products={productsFromDB} addToCart={addToCart} />
      <div className="background" />
    </div>
  );
}
