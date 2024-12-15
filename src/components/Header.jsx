import React from "react";
import "../styles.css";
import profilepic from "../assets/profile.png";

const Header = () => {
  return (
    <header id="header">
      <h1>Alec Barry</h1>
      <img src={profilepic} />
    </header>
  );
};

export default Header;
