import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleCLick = () => {
    alert("I'm the only functional tool here!");
    navigate("/");
  };
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-md bg-body-tertiary mb-3 shadow">
        <div class="container-fluid">
          <div className="logo">
            <a
              class="navbar-brand text-success fw-bold"
              href="#"
              onClick={handleCLick}
            >
              COOKBOOK
            </a>
          </div>

          <div class="links-section d-flex">
            <ul class="navbar-nav gap-5 me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link text-success" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#" onClick={handleCLick}>
                  Recipes
                </a>
              </li>
              {/* <NavLink to="/" class="link">
                Recipes
              </NavLink> */}
              <li class="nav-item">
                <a class="nav-link text-success" href="#">
                  Drinks
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#">
                  Desserts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#">
                  Main Course
                </a>
              </li>
            </ul>
          </div>
          {/*  <div className="input-area">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Find your recipe..."
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
