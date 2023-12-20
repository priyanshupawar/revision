import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
let data = ["priyanshu", "priyanshu123"];
export default function AssignmentSeven() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  //   const [alert, setAlert] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
    const enteredValue = e.target.value;

    let isnameTaken = data.some((username) => username === enteredValue);

    if (value.length >= 8) {
      if (isnameTaken) {
        setText("Username already taken");
      } else if (!isnameTaken) {
        setText("You can take this username");
      } else {
        setText("");
      }
    } else {
      setText("Username must be more than 8 letter");
    }
  }

  return (
    <div className="container w-25  m-auto pt-5">
      <label
        className="form-label"
        style={{ color: "violet", fontWeight: "bolder" }}
      >
        Enter Username
      </label>
      <input
        type="text"
        placeholder="Enter Username"
        className="form-control"
        onChange={handleChange}
        value={value}
      />
      <p style={{ color: "red", fontWeight: "bold" }}>{text}</p>
      {/* <p style={{ color: "green", fontWeight: "bold" }}>{alert}</p> */}
    </div>
  );
}
