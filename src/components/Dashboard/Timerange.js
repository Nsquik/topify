import React from "react";

const Timerange = (props) => {
  return (
    <div className="timerange">
      <div className="timerange__title">TIME RANGE</div>
      <div
        className={`timerange__option ${props.timerange === "short_term" ? "timerange__option--active" : ""}`}
        onClick={() => props.setTimerange("short_term")}
      >
        LAST 4 WEEKS
      </div>
      <div
        className={`timerange__option ${props.timerange === "medium_term" ? "timerange__option--active" : ""}`}
        onClick={() => props.setTimerange("medium_term")}
      >
        LAST 6 MONTHS
      </div>
      <div
        className={`timerange__option ${props.timerange === "long_term" ? "timerange__option--active" : ""}`}
        onClick={() => props.setTimerange("long_term")}
      >
        LAST 12 MONTHS
      </div>
    </div>
  );
};

export default Timerange;
