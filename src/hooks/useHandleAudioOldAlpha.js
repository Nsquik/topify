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
  }, [audioRef, setAudio]);

  //   if (audioRef.current) {
  //     console.log(`Is ${item_name} paused: ${audioRef.current.paused}`);
  //   }

  useEffect(() => {
    if (audio.ref) {
      if (audio.playing) {
        audio.ref.play();
      } else {
        audio.ref.pause();
      }
    }
  }, [audio.playing]);

  const toggleAudio = useCallback(() => {
    // if (audio.ref.paused) {
    //   //   console.log(`toggle play ${item_name}`);
    //   audio.ref.play();
    // } else {
    //   //   console.log(`toggle pause ${item_name}`);
    //   audio.ref.pause();
    // }
    setAudio((audio) => {
      return { ...audio, playing: !audio.playing };
    });
  }, [setAudio, audio.ref, audioRef]);

  const getTogglerProps = ({ onClick, ...otherProps }) => ({
    onClick: callFnsInSequence(onClick, toggleAudio),
    isPlaying: audio.playing,
    ...otherProps,
  });

  return { getTogglerProps, toggleAudio };
};

export default useHandleAudio;
