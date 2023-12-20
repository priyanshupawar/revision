import React, { useReducer } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, items: [...state.items, action.payload] };
    // case "DEL":
    //   return { state: "", items: "" };
    default:
      return { state };
  }
}
export default function AddDelByReducer() {
  //   let [text, setText] = useState("");
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
            let Ivalue = e.target.value;
            dispatch({ type: "ADD", payload: Ivalue });
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "ADD", payload: state.add });
          }}
        >
          Add
        </button>
      </div>
      <div className="box mt-5 w-50 ">
        <ul>
          {state.items.map((item, index) => (
            <div className="box d-flex gap-4 p-4 ">
              <p
                key={index}
                style={{
                  fontWeight: "bold",
                  color: "blue",
                  fontSize: "larger",
                }}
              >
                {item}
              </p>
              <button
                className="btn btn-danger"
                // onClick={() => {
                //   dispatch({ type: "DEL", payload: state.del });
                // }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
