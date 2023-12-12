import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// let arr = [
//   { id: 1, name: "Priyanshu" },
//   { id: 2, name: "Rahul" },
//   { id: 3, name: "Nikhil" },
//   { id: 4, name: "Anna" },
// ];

export default function ClassAssignment3() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  function handleChange(e) {
    let val = e.target.value;
    setName(val);
  }

  function handleAdd(name) {
    const newItem = {
      id: Math.random() + Date.now(),
      title: name,
    };
    setData([...data, newItem]);
    setName("");
  }
  console.log(data);
  return (
    <>
      <div className="conatiner-fluid w-25 d-flex justify-content-evenly mt-5 m-auto">
        <input
          value={name}
          type="text"
          className="form-control"
          style={{ width: "70%" }}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={() => handleAdd(name)}>
          Add
        </button>
      </div>

      <div>
        {data.map((ele, i) => {
          return (
            <div
              key={i}
              className="container-fluid w-25 m-5 p-4"
              style={{
                border: "2px solid lightblue",
                height: "20vh",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <h2 style={{ padding: "5px" }}>{ele.title}</h2>
              <div className="box">
                <img
                  className="img-fluid rounded float-start border"
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  src="https://st.depositphotos.com/1764149/1445/i/380/depositphotos_14456633-stock-photo-blue-arrow.jpg"
                  alt="leftArrow"
                />
                <img
                  className="img-fluid rounded float-end border"
                  style={{
                    width: "45px",
                    height: "45px",
                    cursor: "pointer",
                    padding: "6px",
                  }}
                  src="https://static4.depositphotos.com/1001003/335/i/380/depositphotos_3350011-stock-photo-3d-red-arrow.jpg"
                  alt="RightArrow"
                />
              </div>
              <div className="">
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
