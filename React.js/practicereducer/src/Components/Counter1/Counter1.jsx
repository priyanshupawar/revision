import React, { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);
  function handleIncremenet() {
    setCount(count + 1);
  }
  function handleDecremenet() {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>Count -: {count}</h2>

      <button onClick={handleIncremenet}>Incremenet</button>
      <button onClick={handleDecremenet}>Decremenet</button>
    </div>
  );
}

export default Counter1;
