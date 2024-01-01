import { createContext, useState } from "react";
import React from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  function toggleAuth() {
    setIsAuth(!isAuth);
  }
  return <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>;
}
