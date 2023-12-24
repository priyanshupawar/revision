import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("I am useEffect");
  });
  return (
    <div>
      <h1>Count :{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Dec
      </button>
    </div>
  );
}

export default Counter;
