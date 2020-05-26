import React from "react";
import Authorization from "../../apis/Authorization";
import "./Login.scss";

const Login = (props) => {
  return (
    <div className="wrapper">
      <div className="login">
        <div className="login__logo">
          <div className="login__logo-sub">DISCOVER YOUR TOP TRACKS AND ARTISTS ON SPOTIFY</div>
          <div className="login__logo-main">topify</div>
        </div>
        <div className="login__button">
          {props.error && (
            <div style={{ color: "red", padding: "1rem", fontSize: "1.5rem" }}> Access Denied. Try again. </div>
          )}
          <div className="login__button-main">
            <a href={Authorization}>LOG IN</a>
          </div>
          <div className="login__button-sub">with spotify</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
