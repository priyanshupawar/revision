import React, { useEffect, useState } from "react";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Practice1() {
  // const [color, setColor] = useState("red");
  useEffect(() => {
    // let c1 = Math.trunc(Math.random() * 250);
    // let c2 = Math.trunc(Math.random() * 250);
    // let c3 = Math.trunc(Math.random() * 250);
    // let clr = (rgb)
    // console.log(color:{})
  }, []);
  return (
    <>
      <div style={{ margin: "auto" }}>
        <button>Start</button>
        <button>End</button>
      </div>
      <div
        style={{
          width: "90%",
          marginTop: "60px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          justifyContent: "space-evenly",
          gap: "35px 20px",
          padding: "20px",
        }}
      >
        {arr.map((ele, i) => {
          return (
            <div
              style={{
                // color: color,
                // border: "1px solid red",
                height: "350px",
                width: "350px",
                borderRadius: "15px",
                boxShadow:
                  " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default Practice1;
