import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./MobileSidebar.scss";

export default (props) => {
  return (
    <>
      <input id="navi-toggle" className="navigation__checkbox" type="checkbox" />
      <label className="navigation__button" htmlFor="navi-toggle">
        <span className="navigation__icon"></span>
      </label>
      <div className="mobilesidebar__wrapper">
        <Sidebar />
      </div>
    </>
  );
};
