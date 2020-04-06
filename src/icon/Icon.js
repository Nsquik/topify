import React from "react";
import Search from "./Search";
import User from "./User";
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";

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
    default:
      return;
  }
};

export default Icon;
