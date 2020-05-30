import React from "react";
import "./ItemImg.scss";
import ItemAudio from "../ItemAudio/ItemAudio";

const ItemImg = ({ index, imgUrl, preview_audio }) => {
  return (
    <div className="item__img">
      <figure className="item__cont">
        <img className="item__img--img" src={imgUrl[1].url} alt="" />
        {preview_audio && (
          <>
            <ItemAudio preview_audio={preview_audio} />
          </>
        )}
      </figure>

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
