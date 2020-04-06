import React, { useReducer } from "react";
import useTopArtistsAndTracks from "../hooks/useTopArtistsAndTracks";

const Context = React.createContext(null);

const initialState = {
  timeperiod: "medium_term",
  type: "tracks",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    // case "SET_SPOTIFY_DATA":
    //   return {
    //     ...state,
    //     tracks: payload,
    //   };
    case "SET_TIMEPERIOD":
      return { ...state, timeperiod: payload };
    case "SET_TYPE": {
      return { ...state, type: payload };
    }
    default:
      return state;
  }
};

export const SpotifyDataContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const spotifyData = useTopArtistsAndTracks(state.type, state.timeperiod);

  return <Context.Provider value={{ state, dispatch, spotifyData }}>{props.children}</Context.Provider>;
};

export default Context;
