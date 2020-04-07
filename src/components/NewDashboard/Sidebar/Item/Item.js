import React, { useContext } from "react";
import Icon from "../../../../icon/Icon";
import "./Item.scss";

import SpotifyDataContext from "../../../../context/SpotifyDataContext";

const Item = (props) => {
  const { state } = useContext(SpotifyDataContext);
  return (
    <div className={`side-nav__item ${state.type === props.type ? "side-nav__item--active" : ""}`}>
      <div className={`side-nav__link `}>
        <span>{props.name}</span>
        <div className="details">
          {props.children}
          <Icon
            name={props.iconName}
            className={props.iconClass}
            fill={state.type === props.type ? "#A19EF0" : "white"}
            class=""
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
