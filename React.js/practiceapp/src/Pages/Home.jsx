import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Home() {
  const { toggleAuth } = useContext(AuthContext);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={toggleAuth}>LOGOUT</button>
    </div>
  );
}

export default Home;
