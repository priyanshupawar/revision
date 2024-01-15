// Home.js

import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import styles from "./modules/Home.module.css";

function Home() {
  const { toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Our E-Commerce Store</h1>
        <button className={styles.logoutButton} onClick={toggleAuth}>
          LOGOUT
        </button>
      </div>

      <div className={styles.productShowcase}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.product}>
          <img
            src="https://cdn.clippingpath.in/wp-content/uploads/2017/11/clipping_path_with_shadow_after_01.jpg"
            alt="Product 1"
          />
          <h3>Product 1</h3>
          <p>Description of Product 1.</p>
          <p>$19.99</p>
          <button>Add to Cart</button>
        </div>

        <div className={styles.product}>
          <img
            src="https://theclippingpathservice.com/wp-content/uploads/2019/11/E-commerce-Photo-360-1.gif"
            alt="Product 2"
          />
          <h3>Product 2</h3>
          <p>Description of Product 2.</p>
          <p>$29.99</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
