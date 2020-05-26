import { useLayoutEffect, useState, useCallback, useEffect } from "react";

const callFnsInSequence = (...fns) => (...args) => {
  fns.forEach((fn) => fn && fn(...args));
};

const useHandleAudio = (audioRef, item_name) => {
  const [audio, setAudio] = useState({ ref: null, playing: false });

  useLayoutEffect(() => {
    if (audioRef.current) {
      setAudio({ ref: audioRef.current, playing: !audioRef.current.paused });
    }
  }, [setAudio, audioRef.current]);

  const toggleAudio = () => {
    setAudio({});
    console.log(`audio.ref.paused = ${audio.ref.paused}`);
    console.log(`audio.playing = ${audio.playing}`);
    console.log("===============================");
    if (audio.ref.paused && !audio.playing) {
      audio.ref.play();
      console.log("play");
    }
    if (audio.playing && !audio.ref.paused) {
      audio.ref.pause();
      console.log("pause");
    }
  };

  const getTogglerProps = ({ onClick, ...otherProps }) => ({
    onClick: callFnsInSequence(onClick, toggleAudio),
    isPlaying: audio.playing,
    ...otherProps,
  });

  return { getTogglerProps, toggleAudio };
};

export default useHandleAudio;
