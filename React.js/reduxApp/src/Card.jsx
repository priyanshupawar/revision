// import React from 'react'
// import { useSelector } from 'react-redux'

// function Card() {
//   let x=  useSelector((item)=>{
//         return item.saveReducer
//     })
//   return (
//      <>
//      {x.data.length===0 && <h1>no data </h1>}
//      {x.data.length>0&& <>
//         {x.data.map((item)=>{
//             return  <>   <h1>{item}</h1> <br/>  </> 
//         })}
//      </>}
//      </>
//   )
// }

// export default Card.

import React from 'react';
import { useSelector } from 'react-redux';

function Card() {
  let x = useSelector((item) => {
    return item.saveReducer;
  });

  return (
    <>
   
      {x.data.length === 0 && <h1>no data </h1>}
      {x.data.length > 0 && (
        <>
          {x.data.map((item, index) => {
            return (
              <div key={index} className="card">
                <div className="card-body">
                  <h1 className="card-title">{item}</h1>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Card;
