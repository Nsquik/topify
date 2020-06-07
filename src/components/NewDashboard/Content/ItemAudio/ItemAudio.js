import React, { useRef } from "react";
import Icon from "../../../../icon/Icon";
import useHandleAudio from "../../../../hooks/useHandleAudio";
import "./ItemAudio.scss";

const ItemAudio = ({ preview_audio }) => {
  const audioRef = useRef();
  const { getTogglerProps, ...getTrackProgressProps } = useHandleAudio(audioRef);
  const { playing, currentTime } = getTrackProgressProps;
  const setCurr = () => {};

  return (
    <div className="item__audio-container">
      <button
        className="item__audio"
        {...getTogglerProps({ onClick: setCurr })}
        name="play audio button"
        aria-label="play audio button"
      >
        <div className="svg-icon item__audio--icon">
          <Icon name={`${playing ? "pause" : "play"}`} className="audio__pause" />
        </div>
      </button>
      <div className="item__audio-timer">{playing ? Math.round(currentTime * 100) / 100 + ' "' : null}</div>
      {playing ? (
        <div className="animation__container">
          <div className="item__audio-indicator item__audio-indicator-delay250"></div>
          <div className="item__audio-indicator item__audio-indicator-delay400"></div>
          <div className="item__audio-indicator item__audio-indicator-delay100"></div>
        </div>
      ) : null}
      <audio ref={audioRef} src={preview_audio} preload="none"></audio>
    </div>
  );
};

export default ItemAudio;
