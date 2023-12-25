import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddProduct from "./AddProduct";
import Login from "./Login";
import Auth from "./Auth";

import Show from "../Components/Show";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/add"
        element={
          <Auth>
            <AddProduct />
          </Auth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/counter" element={<Show />} />
    </Routes>
  );
}

export default MainRoutes;
