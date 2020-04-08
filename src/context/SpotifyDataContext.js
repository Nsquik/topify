import React, { useReducer } from "react";
const Context = React.createContext(null);

const initialState = {
  data: null,
  timeperiod: "medium_term",
  type: "tracks",
  loading: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_SPOTIFY_DATA":
      return { ...state, data: payload };
    case "SET_LOADING":
      return { ...state, loading: payload };
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

  return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>;
};

export default Context;
