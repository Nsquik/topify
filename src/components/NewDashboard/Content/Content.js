import React, { useContext, useEffect } from "react";
import "./Content.scss";
import SpotifyDataContext from "../../../context/SpotifyDataContext";

// import ContentItems from "./";

const Content = () => {
  // const { spotifyData, state } = useContext(SpotifyDataContext);

  return (
    <div className="content__wrapper">
      <div className="content__list">
        <div className="content__item"></div>
      </div>
    </div>
  );
};

export default Content;
