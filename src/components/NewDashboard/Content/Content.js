import React from "react";
import "./Content.scss";
import useTopTracksAndArtists from "../../../hooks/useTopArtistsAndTracks";

import ContentList from "./ContentList/ContentList";
import ContentItem from "./ContentItem/ContentItem";

import ItemDetails from "./ItemDetails/ItemDetails";
import ItemImg from "./ItemImg/ItemImg";

const Content = ({ type, timeperiod }) => {
  const spotifyData = useTopTracksAndArtists(type, timeperiod);
  const renderContent = () => {
    if (spotifyData.data !== null) {
      return spotifyData.items.map((item, index) => {
        return (
          <ContentItem key={item.id}>
            <ItemImg imgUrl={type === "tracks" ? item.album.images : item.images} index={index + 1}></ItemImg>

            <ItemDetails
              redirect={item.external_urls.spotify}
              artist={type === "tracks" ? item.artists[0].name : ""}
              title={item.name}
              popularity={item.popularity}
              index={index + 1}
            />
          </ContentItem>
        );
      });
    } else {
      return <Loader />;
    }
  };

  return (
    <>
      <ContentList>{renderContent()}</ContentList>
    </>
  );
};

const Loader = () => {
  return (
    <div className="loader__wrapper">
      <div className="loader">
        <div className="loader__text">LOADING...</div>
      </div>
    </div>
  );
};

export default Content;
