import React, { useLayoutEffect, useState, createContext, useContext, useCallback } from "react";

const audioContext = createContext(null);

export const AudioContext = ({ children }) => {
  const [latestAudio, setLatestAudio] = useState(null);
  return <audioContext.Provider value={{ latestAudio, setLatestAudio }}>{children}</audioContext.Provider>;
};

const callFnsInSequence = (...fns) => (...args) => {
  fns.forEach((fn) => fn && fn(...args));
};

const useHandleAudio = (audioRef) => {
  const { latestAudio, setLatestAudio } = useContext(audioContext);
  const [audio, setAudio] = useState(null);
  //   const [playing, setPlaying] = useState(false);
  const handleReload = useCallback(() => {
    audio.currentTime = 0;
  }, [audio]);

  useLayoutEffect(() => {
    const element = audioRef.current;
    if (element) {
      setAudio(element);
      element.addEventListener("ended", handleReload);
    }

    return () => {
      if (element) {
        element.removeEventListener("ended", handleReload);
      }
    };
  }, [setAudio, audioRef, audio, handleReload]);

  const toggleAudio = async () => {
    if (audio.paused) {
      await audio.play();
      setLatestAudio(audio);
    } else {
      setLatestAudio(null);
      audio.pause();
    }
  };

  const pauseLatestAudio = () => {
    if (latestAudio && latestAudio !== audio) {
      latestAudio.pause();
    }
  };

  const getTogglerProps = ({ onClick, ...otherProps }) => ({
    onClick: callFnsInSequence(toggleAudio, pauseLatestAudio),
    // isPlaying: playing,
    ...otherProps,
  });

  return { getTogglerProps, toggleAudio, pauseLatestAudio };
};

export default useHandleAudio;
