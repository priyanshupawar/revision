import React, { useReducer } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}

export default function AddDelByReducer() {
  let initialState = {
    items: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container  mt-5">
      <div className="box w-50 d-flex gap-3 m-auto">
        <input
          type="text"
          className="form-control w-50"
          onChange={(e) => {
            // Store the input value in the local state
            const inputValue = e.target.value;
            dispatch({ type: "ADD", payload: inputValue });
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            // You can also dispatch with a fixed value, or leave it empty depending on your needs
            dispatch({ type: "ADD", payload: state.add });
          }}
        >
          Add
        </button>
      </div>
      <div className="box">
        {/* Display the list of items */}
        <ul>
          {state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}