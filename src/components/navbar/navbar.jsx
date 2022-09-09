import React from "react";
import Css from "../styles/styles.css";
import myLogo1 from "../media/logo.png";

function Navbar() {
  return (
    <nav>
      <img src={myLogo1} className="logo" alt="React logo" />
      <h3 className="title">React Course - Project 1</h3>
    </nav>
  );
}

export default Navbar;
