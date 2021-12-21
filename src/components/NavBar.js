import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "./NavBar.css";

const NavBars = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          PORTO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              {" "}
              <a class="nav-link" href="#">
                HOME{" "}
              </a>{" "}
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {" "}
                PRODUCTS{" "}
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    {" "}
                    Submenu item 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    {" "}
                    Submenu item 2{" "}
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    {" "}
                    Submenu item 3{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {" "}
                CATEGORIES{" "}
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    {" "}
                    Submenu item 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    {" "}
                    Submenu item 2{" "}
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    {" "}
                    Submenu item 3{" "}
                  </a>
                </li>
              </ul>
            </li>
            <i class="far fa-heart"></i>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBars;
