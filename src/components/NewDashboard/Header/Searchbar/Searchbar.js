import React from "react";
import Icon from "../../../../icon/Icon";
import "./Searchbar.scss";
import UnderWork from "../../Sidebar/Tags/UnderWork";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <UnderWork />

      <input type="text" className="searchbar__input" placeholder="UNDER WORK!" />

      <div className="searchbar__icon">
        <Icon name="search" width="4rem" height="4rem" fill="#fff" />
      </div>
    </div>
  );
};

export default Searchbar;
