import React, { useState } from "react";
import Counter from "./Counter";

const Show = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {show && <Counter />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"} Counter
      </button>
    </div>
  );
};

export default Show;
