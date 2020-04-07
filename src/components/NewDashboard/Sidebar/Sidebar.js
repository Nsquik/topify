import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.scss";
import Item from "./Item/Item";
import UnderWork from "./Tags/UnderWork";
import Premium from "./Tags/Premium";
import SpotifyDataContext from "../../../context/SpotifyDataContext";

const Navbar = (props) => {
  const [click, setClick] = useState("tracks");
  const { dispatch } = useContext(SpotifyDataContext);

  useEffect(() => {
    dispatch({ type: "SET_TYPE", payload: click });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <div className="sidebar">
      <div className="side-nav">
        <div className="side-nav__item--wrapper" onClick={() => setClick("tracks")}>
          <Item name="Top Tracks" iconName="toptracks" iconClass="side-nav__icon" type="tracks">
            {/* Insert TAGS in composition */}
          </Item>
        </div>
        <div className="side-nav__item--wrapper" onClick={() => setClick("artists")}>
          <Item name="Top Artists" iconName="topartists" iconClass="side-nav__icon" type="artists" />
        </div>

        <div className="side-nav__item--wrapper">
          <Item name="Music Player" iconName="musicplayer" iconClass="side-nav__icon" type="underwork">
            <Premium />
            <UnderWork />
          </Item>
        </div>

        <div className="side-nav__item--wrapper">
          <Item name="Playlist Creator" iconName="playlistcreator" iconClass="side-nav__icon" type="underwork">
            <UnderWork />
          </Item>
        </div>
      </div>
      <div className="legal">&copy; 2020 by Topify. All rights reserved.</div>
    </div>
  );
};

export default Navbar;
