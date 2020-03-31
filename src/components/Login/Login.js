import React from "react";
import Authorization from "../../apis/Authorization";
import "./Login.scss";
import desktopImage from "../../images/bg8small.png";
import mobileImage from "../../images/bg8mobile.png";

const Login = () => {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
  return (
    <div className="login" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="login__logo">
        <div className="login__logo-sub">DISCOVER YOUR TOP TRACKS AND ARTISTS ON SPOTIFY</div>
        <div className="login__logo-main">topify</div>
      </div>
      <div className="login__button">
        <div className="login__button-main">
          <a href={Authorization}>LOG IN</a>
        </div>
        <div className="login__button-sub">with spotify</div>
      </div>
    </div>
  );
};

export default Login;
