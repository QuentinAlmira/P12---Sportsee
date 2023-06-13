import React from "react";
import { NavLink } from "react-router-dom";
import Meditation from "../../assets/img/Meditation.png";
import Swiming from "../../assets/img/Swiming.png";
import Cycling from "../../assets/img/Cycling.png"
import Weight from "../../assets/img/Weight.png"
import "./AsideNav.css"

const AsideNav = () => {
  return (
    <div className="AsideNav">
      <div className="AsideNav_conatainer">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <img src={Meditation} alt="Meditation" />
        </NavLink>
  
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <img src={Swiming} alt="Swiming" />
        </NavLink>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <div>

          <img src={Cycling} alt="Cycling" />
          </div>
        </NavLink>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <img src={Weight} alt="Weight" />
        </NavLink>
     </div> 
    </div>
  );
};

export default AsideNav;
