import React from "react";
import "./Header.scss";
import Searchbar from "./Searchbar/Searchbar";
import Logo from "./Logo/Logo";
// import { ReactComponent as searchIcon } from "../../../images/svg/search.svg";

const Header = (props) => {
  return (
    <div className="header">
      <Logo />
      <Searchbar />
      {props.children}
    </div>
  );
};

export default Header;
