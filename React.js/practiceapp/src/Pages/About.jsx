import React from "react";
import styles from "./modules/About.module.css"; // Assuming you have a separate CSS module

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.description}>
        Welcome to our website! We are a dedicated team passionate about
        creating innovative solutions for our clients. With a focus on
        excellence and customer satisfaction, we strive to deliver high-quality
        products and services. Our expertise includes HTML, CSS, JavaScript, and
        modern front-end frameworks like React.js.
      </p>
      <p className={styles.description}>
        Whether you're looking for web development services, consultation, or
        collaboration on exciting projects, we are here for you. Feel free to
        explore our website and contact us for any inquiries. We look forward to
        working with you!
      </p>
    </div>
  );
};

export default AboutPage;
