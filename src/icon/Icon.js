import React from "react";
import Search from "./Search";
import User from "./User";
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import Star from "./Star";
import Spotify from "./Spotify";

const Icon = (props) => {
  switch (props.name) {
    case "search":
      return <Search {...props} />;
    case "user":
      return <User {...props} />;
    case "toptracks":
      return <TopTracks {...props} />;
    case "topartists":
      return <TopArtists {...props} />;
    case "star":
      return <Star {...props} />;
    case "spotify":
      return <Spotify {...props} />;
    default:
      return;
  }
};

export default Icon;
