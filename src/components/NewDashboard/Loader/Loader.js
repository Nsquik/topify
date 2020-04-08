import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader__wrapper">
      <div className="loader">
        <div className="loader__text">LOADING...</div>
      </div>
    </div>
  );
};

export default Loader;
