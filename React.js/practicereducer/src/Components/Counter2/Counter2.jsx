import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INC": {
      return state + action.payload;
    }
    case "DEC": {
      return state - action.payload;
    }

    default:
      return state;
  }
}

function Counter2() {
  const [state, dispatch] = useReducer(reducer, 0);
  function handleIncremenet() {
    dispatch({ type: "INC", payload: 3 });
  }
  function handleDecremenet() {
    dispatch({ type: "DEC", payload: 3 });
  }
  return (
    <div>
      <h2>Count -: {state}</h2>

      <button onClick={handleIncremenet}>Incremenet</button>
      <button onClick={handleDecremenet}>Decremenet</button>
    </div>
  );
}

export default Counter2;
