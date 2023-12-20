import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Filter from "./contexts/Filter";
// import NewContext from "./contexts/NewContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
// export let contextData = createContext();
// export let authContext = createContext();
// let details = { name: "Priyanshu", add: "Indore" };
// let auth = { login: true };
// root.render(
//   <contextData.Provider value={{ ...details }}>
//     <authContext.Provider value={{ ...auth }}>
//       <Filter></Filter>
//     </authContext.Provider>
//   </contextData.Provider>
// );

root.render(
  // <NewContext>
  //   <App />
  // </NewContext>
  <App />
);
