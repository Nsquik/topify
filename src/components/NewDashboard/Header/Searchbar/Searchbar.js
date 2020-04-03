import React from "react";
import Icon from "../../../../icon/Icon";
import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <input type="text" className="searchbar__input" placeholder="not working now" />
      <div className="searchbar__icon">
        <Icon name="search" width="4rem" height="4rem" fill="#fff" />
      </div>
    </div>
  );
};

export default Searchbar;
