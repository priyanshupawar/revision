import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const links = [
  { path: "/", title: "Home" },
  { path: "/products", title: "Products" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/login", title: "Login" },
  { path: "/cart", title: "Cart" },
  
];
function Navbar() {
  return (
    <div className={styles.navContainer}>
      {links.map((link) => (
        <Link key={link.path} to={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
