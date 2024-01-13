// Products.js
import React, { useContext } from "react";
import { Data } from "../ProductData";
import Loder from "./Loder";
import styles from "./modules/Products.module.css";
import { CartContext } from "../Context/CartContext";

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div>{Data === null && <Loder />}</div>
      <div className={styles.productBox}>
        {Data.map((ele, i) => {
          return (
            <div key={i}>
              <img src={ele.image} alt={ele.category} />
              <p>{ele.title}</p>
              <p>Price:₹ {Math.trunc(ele.price * 40)}</p>
              <p>{ele.category}</p>
              <button onClick={() => addToCart(ele)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
