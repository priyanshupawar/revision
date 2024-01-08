import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
// import { Navigate } from "react-router-dom";

function Login() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  // console.log("isAuth :", isAuth);
  // console.log("toggleAuth :", toggleAuth);

  // if (isAuth) {
  //   return <Navigate to={"/"} />;
  // } else {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          toggleAuth();
        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
      <h3>
        {isAuth
          ? "You can access Product and cart pages"
          : "You cannot access product and cart page Without login, So please login first "}
      </h3>
    </div>
  );
}

export default Login;
