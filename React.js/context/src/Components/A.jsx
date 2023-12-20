import React, { useEffect, useState } from "react";
import B from "./B";

const A = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let final = await response.json();

        setData(final);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return (
    <div>
      {/* {data.map((ele, i) => {
        return (
          <>
            <h1>{ele.title}</h1>
          </>
        );
      })} */}
    </div>
  );
};

export default A;
