import React from "react";
import "./Content.scss";
import useTopTracksAndArtists from "../../../hooks/useTopArtistsAndTracks";

import Loader from "../Loader/Loader";

import ContentList from "./ContentList/ContentList";
import ContentItem from "./ContentItem/ContentItem";

import ItemDetails from "./ItemDetails/ItemDetails";
import ItemImg from "./ItemImg/ItemImg";

const Content = ({ type, timeperiod }) => {
  const { spotifyData } = useTopTracksAndArtists(type, timeperiod);

  const renderContent = () => {
    if (spotifyData !== null) {
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

export default Content;
