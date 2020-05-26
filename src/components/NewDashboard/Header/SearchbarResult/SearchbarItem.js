import React from "react";

import "./SearchbarItem.scss";

const SearchbarItem = ({ data }) => {
  const item = data.tracks.items[0];
  return (
    <>
      <div className="searchbar__img">
        <a href={item.external_urls.spotify}>
          <img src={item.album.images[0].url} alt="" />
        </a>
      </div>
      <div className="searchbar__details">
        <a href={item.external_urls.spotify} target="blank_">
          <div className="searchbar__name">
            {item.artists.map((artist, i) => {
              return `${artist.name}${item.artists[i + 1] ? ", " : ""}`;
            })}
          </div>
          <div className="searchbar__title">{item.name}</div>
        </a>
      </div>
    </>
  );
};

export default SearchbarItem;
