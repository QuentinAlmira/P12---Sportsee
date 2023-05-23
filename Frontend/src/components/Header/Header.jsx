import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_component">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
