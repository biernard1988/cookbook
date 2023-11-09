import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
/* import "font-awesome/css/font-awesome.min.css"; // Importe o CSS do FontAwesome
import FontAwesomeIcon from "@fontawesome/react-fontawesome";
import { faUtensils } from "@fontawesome/free-solid-svg-icons"; */

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3 shadow">
        <div class="container-fluid">
          <div className="logo">
            <a class="navbar-brand text-success fw-bold" href="#">
              COOKBOOK
            </a>
            {/* <FontAwesomeIcon icon={faUtensils} /> */}
          </div>

          <div class="links-section d-flex">
            <ul class="navbar-nav gap-5 me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link text-success" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#">
                  Recipes
                </a>
              </li>
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
