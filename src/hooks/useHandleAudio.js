import React, { useLayoutEffect, useState, createContext, useContext, useCallback, useRef } from "react";

const context = createContext(null);

export const AudioContext = ({ children }) => {
  const [latestAudio, setLatestAudio] = useState(null);
  return <context.Provider value={{ latestAudio, setLatestAudio }}>{children}</context.Provider>;
};

const callFnsInSequence = (...fns) => (...args) => {
  fns.forEach((fn) => fn && fn(...args));
};

const useHandleAudio = (audioRef, item_name) => {
  const audioContext = useContext(context);

  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentPercentTime, setCurrentPercentTime] = useState(0);
  const duration = useRef(null);
  const getLatestAudio = useCallback(() => {
    return audioContext?.latestAudio;
  }, [audioContext]);

  const setLatestAudio = useCallback((value) => (audioContext ? audioContext.setLatestAudio?.(value) : null), [
    audioContext,
  ]);

  //////////////EVENT HANDLERS/////////////////////
  const handleReload = useCallback(() => {
    audio.currentTime = 0;
  }, [audio]);

  const handlePlayEvent = useCallback(() => {
    setPlaying((playing) => true);
  }, [setPlaying]);

  const handlePauseEvent = useCallback(() => {
    setPlaying((playing) => false);
  }, [setPlaying]);

  const handleTimeChange = useCallback(() => {
    const percent = (currentTime / duration.current) * 100;
    setCurrentPercentTime(percent);
    setCurrentTime(audio?.currentTime);
  }, [setCurrentTime, audio, duration, setCurrentPercentTime, currentTime]);

  const handleDurChange = useCallback(() => {
    duration.current = audioRef.current.duration;
  }, [audioRef]);

  //////////////EVENT HANDLERS/////////////////////

  useLayoutEffect(() => {
    const element = audioRef.current;
    if (element) {
      setAudio(element);

      //////////////EVENT HANDLERS/////////////////////
      element.addEventListener("durationchange", handleDurChange);
      element.addEventListener("play", handlePlayEvent);
      element.addEventListener("pause", handlePauseEvent);
      element.addEventListener("ended", handleReload);
      element.addEventListener("timeupdate", handleTimeChange);
      //////////////EVENT HANDLERS/////////////////////
    }

    return () => {
      if (element) {
        element.removeEventListener("play", handlePlayEvent);
        element.removeEventListener("pause", handlePauseEvent);
        element.removeEventListener("ended", handleReload);
        element.removeEventListener("timeupdate", handleTimeChange);
        element.removeEventListener("durationchange", handleDurChange);
      }
    };
  }, [setAudio, audioRef, audio, handleReload, handlePauseEvent, handlePlayEvent, handleTimeChange, handleDurChange]);

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
    // if (latestAudio && latestAudio !== audio) {
    //   latestAudio.pause();
    // }
    if (getLatestAudio() && getLatestAudio() !== audio) {
      getLatestAudio().pause();
    }
  };

  const getTogglerProps = ({ onClick, ...otherProps }) => ({
    onClick: callFnsInSequence(toggleAudio, pauseLatestAudio),
    // isPlaying: playing,
    ...otherProps,
  });
  // console.log(`${item_name} is playing: ${playing}`);
  console.log(`curr%: ${currentTime}`);

  return { getTogglerProps, toggleAudio, pauseLatestAudio, playing };
};

export default useHandleAudio;
