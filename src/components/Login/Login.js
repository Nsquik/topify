import React from "react";
import Authorization from "../../apis/Authorization";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
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
