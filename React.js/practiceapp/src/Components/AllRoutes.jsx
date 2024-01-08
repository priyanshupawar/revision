import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";

import PageNotFound from "../Pages/PageNotFound";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Cart from "../Pages/Cart";
import PrivateRoutes from "./PrivateRoutes";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/products"
        element={
          <PrivateRoutes>
            <Products />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/products/:product_id"
        element={
          <PrivateRoutes>
            <SingleProduct />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
