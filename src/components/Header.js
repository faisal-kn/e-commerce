import "./Header.css";
import shoes from "../Images/white-shoes.png";
import Navbar from "./NavBar";
import { useEffect } from "react";

const Header = () => {
  // useEffect(() => {
  //   const cont = document.getElementById("containerScaled");
  //   const box = document.querySelector(".box");
  //   const follow = document.getElementById("followC");
  //   cont.addEventListener("mousemove", (e) => {
  //     var left = parseFloat(box.style.left);
  //     var right = parseFloat(box.style.top);
  //     var width = parseFloat(box.style.width);
  //     var height = parseFloat(box.style.height);

  //     var addX = 0;
  //     var addY = 0;

  //     if (e.clientX > width / 2) {
  //       addX = 20;
  //     }
  //     if (e.clientX < width / 2) {
  //       addX = -20;
  //     }
  //     if (e.clientY > height / 2) {
  //       addY = 20;
  //     }
  //     if (e.clientY < height / 2) {
  //       addY = -20;
  //     }
  //     // follow.css("top", e.clientY + addY).css("left", e.clientX + addX);
  //     follow.style.top = e.clientY + addY;
  //     follow.style.left = e.clientX + addX;
  //   });
  //   cont.addEventListener("mouseleave", (e) => {
  //     follow.style.top = "50%";
  //     follow.style.left = "50%";
  //   });
  // }, []);

  return (
    <>
      <div className="header">
        <Navbar />{" "}
        <div className="header-container">
          <div className="header-maincontent">
            <h1>Spring/Summer Season</h1>
            <h4
              style={{
                display: "inline-block",
                fontSize: "3vw",
                fontWeight: "bolder",
              }}
            >
              up
              <br />
              to
            </h4>
            <h4 className="bigHeading">50% OFF</h4>
          </div>
          {/* <div id="containerScaled" class="container">
            <div class="boxcolored"></div> */}
          <img
            src={shoes}
            alt=""
            id="followC"
            className="shoeImage mouseFollow"
          />
          {/* <div class="box">mouse me</div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
