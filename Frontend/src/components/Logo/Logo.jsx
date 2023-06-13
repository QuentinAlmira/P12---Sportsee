import React from "react";
import LogoSportsee from "../../assets/img/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      {/* les img imortées depuis la balise img sont accesibles dans public */}
      <div className="logo_img">
        <img src={LogoSportsee} alt="Sportsee logo" />
      </div>
    </div>
  );
};

export default Logo;
