import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
}

export default PrivateRoutes;
