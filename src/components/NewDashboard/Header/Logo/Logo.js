import React from "react";
import "./Logo.scss";
import LogoIcon from "../../../../images/logo.png";

const Logo = () => {
  return (
    <div className="header__logo">
      <div className="header__logo-icon">
        <a href="/">
          <img src={LogoIcon} alt="" />
        </a>
      </div>
      <div className="header__logo-text">Discover Some Music</div>
    </div>
  );
};

export default Logo;
