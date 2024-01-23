import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Register from "./Pages/Register";
import SingleProductPage from "./Pages/SingleProductPage";
import CartPage from "./Pages/CartPage";
import DefaultPage from "./Pages/DefaultPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<DefaultPage />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="/cart/:id" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
