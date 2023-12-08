import React, { useState } from "react";
import "./ClassAssignment.css";

export default function ClassAssignment() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null);
  const [text, setText] = useState("");

  function handleAdd() {
    if (typeof value === "number" && !isNaN(value)) {
      setCount(count + value);
    }
  }

  function handleSub() {
    setCount(count - value);
  }

  function handleChnage(e) {
    let num = Number(e.target.value);
    // console.log(e.target.value);
    setValue(num);
  }

  function handleSubmit(e) {
    if (value === 0) {
      setText("Enter number greater than zero");
    } else if (value === undefined) {
      setText("Enter any number");
    } else if (value < 0) {
      setText("Enter positive number");
    } else if (value === null) {
      setText("Enter any number in input filed");
    } else {
      //   setValue(null);
      setText("");
    }
  }
  return (
    <>
      <div>
        <input
          type="number"
          placeholder="Enter positive number"
          onChange={handleChnage}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Count : {count}</div>
      <div>
        <button onClick={handleAdd}>Increment</button>
        {count === 0 || count - value < 0 ? (
          <button disabled>Decrement</button>
        ) : (
          <button onClick={handleSub}>Decrement</button>
        )}
      </div>
      <div>
        <h1 style={{ color: "red" }}>{text}</h1>
      </div>
    </>
  );
}
