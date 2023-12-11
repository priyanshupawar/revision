import React, { useReducer } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function reducer(state, action) {
  if (action.type === "INC") {
    return { ...state, inc: state.inc + 1 };
  } else if (action.type === "INC2") {
    return { ...state, inc: state.inc + 2 };
  } else if (action.type === "INC6") {
    return { ...state, inc: state.inc + 6 };
  } else if (action.type === "INC5") {
    return { ...state, inc: state.inc + 5 };
  } else if (action.type === "INC8") {
    return { ...state, inc: state.inc + 8 };
  } else if (action.type === "DEC4") {
    return { ...state, dec: state.dec - 4 };
  } else if (action.type === "DEC2") {
    return { ...state, dec: state.dec - 2 };
  } else {
    return state;
  }
  //   console.log("state", state);
  //   console.log("action", action);
}
export default function CounterByReducer() {
  let initialState = {
    inc: 1,
    dec: 10,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log("state", state);
  return (
    <>
      <h1>{state.inc}</h1>
      <h1>{state.dec}</h1>
      <button
        className="btn btn-primary p-2"
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        inc
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "INC2" });
        }}
      >
        inc2
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "INC6" });
        }}
      >
        inc6
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "INC5" });
        }}
      >
        inc5
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "INC8" });
        }}
      >
        inc8
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "DEC4" });
        }}
      >
        dec4
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "DEC2" });
        }}
      >
        dec2
      </button>
    </>
  );
}
