import { createContext } from "react";

export let filterContext = createContext();
let filterData = { text: "mobile", price: "0", sort: "lowest" };
function Filter(props) {
  return (
    <filterContext.Provider value={{ ...filterData }}>
      {props.children}
    </filterContext.Provider>
  );
}

export default Filter;
