/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BsBag, BsPersonCircle } from "react-icons/bs";
import { IconContext } from "react-icons";

import "./NavBar.css";

const NavBars = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          PORTO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav check">
            <li className="nav-item active">
              {" "}
              <a class="nav-link" href="#">
                Home{" "}
              </a>{" "}
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                {" "}
                Categories{" "}
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
                Products{" "}
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
                Hover me{" "}
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
          </ul>
          <div className="nav-end__items">
            <IconContext.Provider value={{ color: "WHITE", size: "30px" }}>
              <div style={{ padding: "10px" }}>
                <BsBag />
              </div>
            </IconContext.Provider>
            {/* </div> */}
            {/* <div className="nav-end__items"> */}
            <IconContext.Provider value={{ color: "WHITE", size: "30px" }}>
              <div>
                <BsPersonCircle />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBars;
