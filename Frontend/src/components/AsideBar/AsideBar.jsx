import React from "react";
import AsideNav from "../AsideNav/AsideNav";
import "./AsideBar.css";

const AsideBar = () => {
  return (
    <div className="AsideBar">
      <AsideNav />
      <div className="copyright">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
};

export default AsideBar;
