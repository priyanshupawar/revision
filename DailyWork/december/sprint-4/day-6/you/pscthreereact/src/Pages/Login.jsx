import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={toggleAuth}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
}
