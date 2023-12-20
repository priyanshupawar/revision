// import React from "react";
// import { authContext, contextData } from "../index";
// import { useContext } from "react";
// import { filterContext } from "../contexts/Filter";

// function C() {
//   let auth = useContext(authContext);
//   let data = useContext(contextData);
//   let filter = useContext(filterContext);
//   console.log(filter.text, filter.price, filter.sort);
//   return (
//     <h1>
//       hello my name is {data.name}and i am form {data.add} and i am active part
//       of jsp{auth.login ? "yes" : "no"}
//     </h1>
//   );

//   //   return (
//   //     <div>
//   //         <contextData.Consumer>
//   //             {(item)=>{
//   //                  return  <authContext.Consumer>
//   //                     {(data)=>{

//   //                         return <h1>my name is {item.name} and i am from {item.add} and i am active member of jsp {data.login ? "yes" :"no"}</h1>
//   //                     }}
//   //                  </authContext.Consumer>
//   //             }}
//   //         </contextData.Consumer>
//   //     </div>
//   //   )
// }

// export default C;
