import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// Navbar component
function Navbar() {
  // useNavigate hook from react-router-dom for programmatic navigation
  const navigate = useNavigate();

  // Event handler for the "COOKBOOK" brand link
  const handleCLick = () => {
    alert("I'm the only functional tool here!"); // Display an alert message
    navigate("/"); // Navigate to the home ("/") route
  };

  // JSX structure for the Navbar
  return (
    <>
      {/* Navbar structure from Bootstrap */}
      <nav className="navbar sticky-top navbar-expand-md bg-body-tertiary mb-3 shadow">
        <div className="container-fluid">
          {/* Logo section with a brand link */}
          <div className="logo">
            <a
              className="navbar-brand text-success fw-bold"
              href="#"
              onClick={handleCLick}
            >
              COOKBOOK
            </a>
          </div>

          {/* Links section with navigation links */}
          <div className="links-section d-flex">
            <ul className="navbar-nav gap-5 me-auto mb-2 mb-lg-0">
              {/* Home link */}
              <li className="nav-item">
                <a
                  className="nav-link text-success"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              {/* Recipes link with onClick event */}
              <li className="nav-item">
                <a
                  className="nav-link text-success"
                  href="#"
                  onClick={handleCLick}
                >
                  Recipes
                </a>
              </li>

              {/* Other navigation links */}
              <li className="nav-item">
                <a className="nav-link text-success" href="#">
                  Drinks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="#">
                  Desserts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="#">
                  Main Course
                </a>
              </li>
            </ul>
          </div>

          {/* Search input area (commented out for now) */}
          {/* <div className="input-area">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Find your recipe..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div> */}
        </div>
      </nav>
    </>
  );
}

// Exporting the Navbar component as the default export of this module
export default Navbar;
