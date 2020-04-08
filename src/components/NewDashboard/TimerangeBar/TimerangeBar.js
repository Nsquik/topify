import React, { useContext } from "react";
import "./TimerangeBar.scss";
import SpotifyContext from "../../../context/SpotifyDataContext";

const TimerangeBar = () => {
  const { state, dispatch } = useContext(SpotifyContext);

  const onClick = (payload) => {
    dispatch({ type: "SET_TIMEPERIOD", payload });
    dispatch({ type: "SET_LOADING", payload: true });
  };

  return (
    <div className="timerangebar">
      <ul className="timerangebar__list">
        <li
          className={`timerangebar__item ${state.timeperiod === "short_term" ? "timerangebar__item--active" : ""}`}
          onClick={() => onClick("short_term")}
        >
          LAST 4 WEKKS
        </li>
        <li
          className={`timerangebar__item ${state.timeperiod === "medium_term" ? "timerangebar__item--active" : ""}`}
          onClick={() => dispatch({ type: "SET_TIMEPERIOD", payload: "medium_term" })}
        >
          LAST 6 MONTHS
        </li>
        <li
          className={`timerangebar__item ${state.timeperiod === "long_term" ? "timerangebar__item--active" : ""}`}
          onClick={() => dispatch({ type: "SET_TIMEPERIOD", payload: "long_term" })}
        >
          ALL TIME
        </li>
      </ul>
    </div>
  );
};

export default TimerangeBar;
