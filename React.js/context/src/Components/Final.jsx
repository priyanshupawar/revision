import React, { useContext } from "react";
import { DataContext, FinalContext } from "../contexts/NewContext";
const Final = () => {
  let color = useContext(FinalContext);
  let data = useContext(DataContext);
  console.log(data);
  // console.log(color);
  return (
    <>
      {data.map((ele, i) => {
        return (
          <div key={ele.id} style={{ backgroundColor: color[i] }}>
            <img src={ele.image} alt={ele.title} />
            <h3>{ele.title}</h3>
            {/* <p>{ele.decription}</p> */}
          </div>
        );
      })}
    </>
  );
};

export default Final;
