import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./CategoryProduct";
import DetailProduct from "./DetailProduct";
import ShoppingCart from "./ShoppingCart";

const Main = () => (
  <main style={{ backgroundColor: "#f6f7f9" }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/getlatest" element={<Product />} />
      <Route path="/products/detail" element={<DetailProduct />} />
      <Route path="/ShoppingCart" element={<ShoppingCart />} />
    </Routes>
  </main>
);
export default Main;
