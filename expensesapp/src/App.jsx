import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
 
  const [formData, setFormData] = useState({
    duration: "yearly",
    price: 129,
    date: new Date().toISOString().split("T")[0],
  });

  const calculatePrice = (selectedDuration) => {
    switch (selectedDuration) {
      case "yearly":
        return 129;
      case "monthly":
        return 79;
      case "weekly":
        return 29;
      default:
        return 0;
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted!");
    console.log("FormData:", formData);
    alert("Congratulations! Subscribed successfully!");
    setData([...data, formData]);
  };

  const handleDurationChange = (e) => {
    const selectedDuration = e.target.value;
    setFormData({
      ...formData,
      duration: selectedDuration,
      price: calculatePrice(selectedDuration),
    });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      date: e.target.value,
    });
  };

  return (
    <div
      className="container mt-5 d-grid gap-4 border p-3 w-50"
      style={{
        backgroundColor: "#f7f7f7",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NHMuNIgwbk8l3wjZvpawtNLUQ5FuMoBcIQ&usqp=CAU"
        alt=""
        className="img-fluid mb-4"
      />
      <div className="form-group d-flex gap-4">
        <label
          htmlFor="subscribe"
          className="fw-bold"
          style={{ color: "#4CAF50" }}
        >
          Subscribe
        </label>
        <select
          className="form-control"
          id="subscribe"
          onChange={handleDurationChange}
          value={formData.duration}
          style={{ backgroundColor: "#fff", color: "#333" }}
        >
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
      <div className="form-group d-flex gap-4">
        <label htmlFor="price" className="fw-bold" style={{ color: "#4CAF50" }}>
          Price
        </label>
        <h3 style={{ color: "#333" }}>₹{formData.price}/- only</h3>
      </div>
      <div className="form-group d-flex gap-5">
        <label htmlFor="date" className="fw-bold" style={{ color: "#4CAF50" }}>
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={formData.date}
          onChange={handleDateChange}
          style={{ backgroundColor: "#fff", color: "#333" }}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50" }}
      >
        Submit
      </button>
      {data.length <= 0 && <h1>No data is there </h1>}
      {data.length > 0 && (
        <div className="mt-4">
          <h2 className="text-center fw-bold" style={{ color: "#4CAF50" }}>
            Collected Data
          </h2>
          <select name="" id="" className="form-control w-25 m-5">
            <option value="">All</option>
            <option value="">2023</option>
            <option value="">2022</option>
            <option value="">2021</option>
            <option value="">2020</option>
            <option value="">2019</option>
          </select>
          <ul className="list-group">
            {data.map((item, index) => (
              <li
                key={index}
                className="list-group-item"
                style={{
                  backgroundColor: "#fff",
                  color: "#333",
                  borderColor: "#ddd",
                }}
              >
                <strong>Duration:</strong> {item.duration},{" "}
                <strong>Price:</strong> ₹{item.price}/-, <strong>Date:</strong>{" "}
                {item.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
