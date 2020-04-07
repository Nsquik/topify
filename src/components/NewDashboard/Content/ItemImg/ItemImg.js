import React from "react";
import "./ItemImg.scss";

const ItemImg = ({ index, imgUrl }) => {
  return (
    <div className="item__img">
      <figure></figure>
      <img className="item__img--img" src={imgUrl[0].url} alt="" />

      <div className="item__index">
        <div
          className={`item__index-number ${
            index === 1
              ? "item__index-number--first"
              : index === 2
              ? "item__index-number--second"
              : index === 3
              ? "item__index-number--third"
              : ""
          } `}
        >
          {index}
        </div>
      </div>
    </div>
  );
};

export default ItemImg;
