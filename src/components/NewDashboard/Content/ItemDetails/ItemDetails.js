import React from "react";
import "./ItemDetails.scss";
import Icon from "../../../../icon/Icon";

const ItemDetails = (props) => {
  const stars = [];
  const starIndex = Math.floor((Math.ceil(props.popularity / 10) * 10) / 20);

  for (let i = 0; i < starIndex; i++) {
    stars.push(<Icon name="star" class="" key={i} />);
  }

  return (
    <div className="item__details">
      <a
        href={props.redirect}
        target="_blank"
        rel="noopener noreferrer"
        name="navigate to spotify"
        aria-label="navigate to spotify"
      >
        <div className="item__spotify-link">
          <Icon name="spotify" />
        </div>
      </a>

      <div className="item__artist">{props.artist}</div>
      <div
        className={`item__title ${
          props.index === 1
            ? "item__title--first"
            : props.index === 2
            ? "item__title--second"
            : props.index === 3
            ? "item__title--third"
            : ""
        }`}
      >
        {props.title}
      </div>
      <div className="item__popularity">
        <span>POPULARITY:</span>
        <div className="stars-container">
          {stars}
          <span>{props.popularity}%</span>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
