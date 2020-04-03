import React from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__option navbar__option--active" onClick={() => props.setType("tracks")}>
        <div className={`navbar__text ${props.type === "tracks" ? "navbar__text--active" : ""}`}>TRACKS</div>
      </div>
      <div className="navbar__option" onClick={() => props.setType("artists")}>
        <div className={`navbar__text ${props.type === "artists" ? "navbar__text--active" : ""}`}>ARTISTS</div>
      </div>
    </div>
  );
};

export default Navbar;
