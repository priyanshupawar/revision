import React from "react";
import { Link } from "react-router-dom";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/products", title: "Products" },
  { path: "/login", title: "Login" },
];
const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "50px",
        backgroundColor: "black",
        padding: "15px",
      }}
    >
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
