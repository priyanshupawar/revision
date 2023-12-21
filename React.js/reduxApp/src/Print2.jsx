// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { saveHandler } from './redux/action/actionCreater'

// function Print2() {
//    let [input,setInput]= useState('')
//       let dispatch= useDispatch()
//    function inputHandler(e)
//    {
//     setInput(e.target.value)
//    }
//   return (
//     <div>
//         <input type='text' placeholder='enter your msg for print'
//         onChange={inputHandler} value={input}/>
//         <button onClick={()=>{
//                dispatch(saveHandler(input))
//                setInput('')
//         }}>ADD</button>
//     </div>
//   )
// }

// export default Print2

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveHandler } from "./redux/action/actionCreater";

function Print2() {
  let [input, setInput] = useState("");
  let dispatch = useDispatch();

  function inputHandler(e) {
    setInput(e.target.value);
  }

  return (
    <div className="container mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message for print"
          onChange={inputHandler}
          value={input}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              dispatch(saveHandler(input));
              setInput("");
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Print2;
