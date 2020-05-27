import React, { useRef } from "react";
import "./ItemImg.scss";
import useHandleAudio from "../../../../hooks/useHandleAudio";

const ItemImg = ({ index, imgUrl, preview_audio, setCurrentAudio, item_name }) => {
  const audioRef = useRef();

  const { getTogglerProps, currentPercentTime, pauseLatestAudio } = useHandleAudio(audioRef, item_name);

  const setCurr = () => {
    console.log("Witam.");
  };
  return (
    <div className="item__img">
      <figure>
        <img className="item__img--img" src={imgUrl[0].url} alt="" />
        {preview_audio && (
          <>
            <button {...getTogglerProps({ onClick: setCurr })}>TOGGLE</button>
            <button>{currentPercentTime}</button>
            <button onClick={() => pauseLatestAudio()}>CHANGE</button>
            <audio ref={audioRef} className="item__audio" src={preview_audio}>
              {" "}
            </audio>
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
