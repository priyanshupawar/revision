import React, { useEffect, useState } from "react";

function Product() {
  console.log("hii i am loaded");
  let [count, setCount] = useState(1);
  let [color, setColor] = useState("");
  function counterHandler() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log("hello useEffect");
    if (count > 8) {
      setColor("red");
    } else {
      let no1 = Math.trunc(Math.random() * 250);
      let no2 = Math.trunc(Math.random() * 250);
      let no3 = Math.trunc(Math.random() * 250);
      setColor(`rgb(${no1}, ${no2}, ${no3})`);
    }
    setTimeout(() => {
      console.log("testing");
    }, 5000);
    //console.log(color)
    return () => {
      console.log("cleanup function");
    };
  }, [count]);

  return (
    <div>
      Product
      <hr />
      counter:{" "}
      <h1 style={{ color: color }}>
        <b>{count}</b>
      </h1>
      <br />
      <button onClick={counterHandler}>inc</button>
    </div>
  );
}

export default Product;
