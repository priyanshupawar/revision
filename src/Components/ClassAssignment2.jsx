import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ClassAssignment2() {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [price, setPrice] = useState();
  const [myalert, setMyalert] = useState("");

  function handleToggle() {
    setToggle(!toggle);
  }

  function handleName(e) {
    let value = e.target.value;
    // console.log(value);
    setName(value);
    if (/^\d/.test(value)) {
      setMyalert("First Character should be letter only");
    } else if (value.length <= 5) {
      setMyalert("Username should be greater than 5 letter");
    } else {
      setMyalert("");
    }
  }
  function handlePassword(e) {
    let value = e.target.value;
    // console.log(value);

    setPass(value);

    if (value.length <= 5) {
      setMyalert("Password should be greater than 5 letter");
    } else {
      setMyalert("");
    }
  }
  function handlePrice(e) {
    let value = e.target.value;
    // console.log(value);

    setPrice(value);

    if (/^\d/.test(value)) {
      value = Number(value);
      setMyalert("");
    } else if (value < 0) {
      setMyalert("Enter positive number");
    } else {
      setMyalert("Enter only number");
    }
  }
  function handleCancle() {
    setName("");
    setPass("");
    setPrice("");
    setMyalert("");
    setToggle(!toggle);
  }
  function handleSubmit() {
    if (name.length === 0) {
      setMyalert("Write somting");
    } else {
      alert("Data submitted successfully !!");
      setToggle(!toggle);
      setMyalert("");
    }
  }
  return (
    <div>
      <div className="container text-center m-5">
        <button class="btn btn-success" onClick={handleToggle}>
          Toggler
        </button>
      </div>

      {toggle ? (
        <div className="container m-auto w-25 border border-primary rounded p-5">
          <label className="form-label">Full name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="form-control"
            value={name}
            onChange={handleName}
          />
          <p></p>
          <label className="form-label">Password</label>

          <input
            type="text"
            placeholder="Enter password"
            className="form-control"
            value={pass}
            onChange={handlePassword}
          />
          <p></p>
          <label className="form-label">Price</label>

          <input
            type="text"
            placeholder="Enter price"
            className="form-control"
            value={price}
            onChange={handlePrice}
          />
          <p></p>
          <div className="box d-flex justify-content-between">
            <button class="btn btn-danger" onClick={handleCancle}>
              Cancel
            </button>
            <button class="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="box w-25 m-auto text-center   ">
        <p style={{ color: "red", fontWeight: "bolder" }}>{myalert}</p>
      </div>
    </div>
  );
}
