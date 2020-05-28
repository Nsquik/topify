import React, { useRef } from "react";
import "./ItemImg.scss";
import useHandleAudio from "../../../../hooks/useHandleAudio";
import Icon from "../../../../icon/Icon";

const ItemImg = ({ index, imgUrl, preview_audio, item_name }) => {
  const audioRef = useRef();
  const { getTogglerProps, currentTime, playing, duration } = useHandleAudio(audioRef, item_name);

  const setCurr = () => {};
  return (
    <div className="item__img">
      <figure className="item__cont">
        <img className="item__img--img" src={imgUrl[0].url} alt="" />
        {preview_audio && (
          <>
            <div className="item__audio" {...getTogglerProps({ onClick: setCurr })}>
              <div className="svg-icon item__audio--icon">
                <Icon name={`${playing ? "pause" : "play"}`} className="audio__pause" />
              </div>

              <div className="item__audio-timer">{playing ? Math.round(currentTime * 100) / 100 + ' "' : null}</div>
              {playing ? (
                <div className="animation__container">
                  <div className="item__audio-indicator item__audio-indicator-delay250"></div>
                  <div className="item__audio-indicator item__audio-indicator-delay400"></div>
                  <div className="item__audio-indicator item__audio-indicator-delay100"></div>
                </div>
              ) : null}

              {/* <button>{currentPercentTime}</button> */}
              {/* <button onClick={() => changeVolume(0.5)}>CHANGE</button> */}
              {/* <button>{volume}</button> */}
              <audio ref={audioRef} src={preview_audio}></audio>
            </div>
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
