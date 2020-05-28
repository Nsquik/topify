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
  const [volume, setVolume] = useState(0);
  const duration = useRef(null);
  const getLatestAudio = useCallback(() => {
    return audioContext?.latestAudio;
  }, [audioContext]);

  const setLatestAudio = useCallback((value) => (audioContext ? audioContext.setLatestAudio?.(value) : null), [
    audioContext,
  ]);

  //////////////EVENT HANDLERS/////////////////////
  const handleReload = useCallback(() => {
    audio.load();
    setCurrentTime(0);
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

  const handleVolumeChange = useCallback(() => {
    setVolume(audio?.volume);
  }, [setVolume, audio]);
  //////////////EVENT HANDLERS/////////////////////

  useLayoutEffect(() => {
    const element = audioRef?.current;
    if (element) {
      setAudio(element);
      setVolume(element.volume);

      //////////////EVENT HANDLERS/////////////////////
      element.addEventListener("durationchange", handleDurChange);
      element.addEventListener("play", handlePlayEvent);
      element.addEventListener("pause", handlePauseEvent);
      element.addEventListener("ended", handleReload);
      element.addEventListener("timeupdate", handleTimeChange);
      element.addEventListener("volumechange", handleVolumeChange);
      //////////////EVENT HANDLERS/////////////////////
    }

    return () => {
      if (element) {
        element.removeEventListener("play", handlePlayEvent);
        element.removeEventListener("pause", handlePauseEvent);
        element.removeEventListener("ended", handleReload);
        element.removeEventListener("timeupdate", handleTimeChange);
        element.removeEventListener("durationchange", handleDurChange);
        element.removeEventListener("volumechange", handleVolumeChange);
      }
    };
  }, [
    setAudio,
    audioRef,
    audio,
    handleReload,
    handlePauseEvent,
    handlePlayEvent,
    handleTimeChange,
    handleDurChange,
    handleVolumeChange,
  ]);

  const toggleAudio = async () => {
    if (audio?.paused) {
      await audio.play();
      setLatestAudio(audio);
    } else {
      setLatestAudio(null);
      if (audio) {
        audio.pause();
      }
    }
  };

  const pauseLatestAudio = () => {
    if (getLatestAudio() && getLatestAudio() !== audio) {
      getLatestAudio().pause();
    }
  };

  const changeVolume = useCallback(
    (value) => {
      audio.volume = value;
    },
    [audio]
  );

  ////////////////// PROP GETTERS //////////////////////
  const getTogglerProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(toggleAudio, pauseLatestAudio, onClick),
    // isPlaying: playing,
    ...otherProps,
  });

  const getTrackProgressProps = ({ ...otherProps }) => ({
    currentTime,
    currentTimePercentage: currentPercentTime,
    ...otherProps,
  });

  const getVolumeProps = ({ ...otherProps }) => ({
    volume,
    ...otherProps,
  });
  ////////////////// PROP GETTERS //////////////////////

  return {
    getTogglerProps,
    getTrackProgressProps,
    toggleAudio,
    pauseLatestAudio,
    playing,
    currentPercentTime,
    getVolumeProps,
    changeVolume,
    volume,
    currentTime,
    duration: duration.current,
  };
};

export default useHandleAudio;
