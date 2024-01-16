import React from "react";
import logo from "./images/A-logo.png";

const Navbar = () => {
  const HomeData = () => {
    // Handle HomeData functionality
  };

  const trendingData = () => {
    // Handle trendingData functionality
  };

  const searchVideos = (event) => {
    // Handle searchVideos functionality
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="YouTube Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          YouTube
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={HomeData}>
              <a className="nav-link" href="./">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={trendingData}>
              <a className="nav-link" href="./">
                Trending
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./">
                Subscriptions
              </a>
            </li>
          </ul>
          <form className="d-flex ms-auto">
            <input
              id="query"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" onClick={searchVideos}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
