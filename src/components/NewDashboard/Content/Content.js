import React, { useContext, useEffect } from "react";
import "./Content.scss";
import SpotifyDataContext from "../../../context/SpotifyDataContext";

// import ContentItems from "./";

const Content = () => {
  const { spotifyData, state } = useContext(SpotifyDataContext);

  console.log(spotifyData);

  return (
    <div className="content__wrapper">
      <div className="content__list">
        <div className="item">
          <div className="item__img">
            <figure></figure>
            <img
              className="item__img--img"
              src="https://i.scdn.co/image/b2a2eab1ac3520b9b9bdbabdec7e4dbed07872bc"
              alt="siema"
            />
            <div className="item__index">
              <div className="item__index-number">1</div>
            </div>
          </div>
          <div className="item__details">
            <div className="item__spotify-link">X</div>
            <div className="item__artist">schafter</div>
            <div className="item__title">double d's</div>
            <div className="item__popularity">POPULARITY: X X X</div>
          </div>
        </div>

        <div className="item">
          <div className="item__img">
            <figure></figure>
            <img
              className="item__img--img"
              src="https://i.scdn.co/image/b2a2eab1ac3520b9b9bdbabdec7e4dbed07872bc"
              alt="siema"
            />
            <div className="item__index">1</div>
          </div>
          <div className="item__details">
            <div className="item__spotify-link">X</div>
            <div className="item__artist">Triple One</div>
            <div className="item__title">Triple Lakes</div>
            <div className="item__popularity">X X X</div>
          </div>
        </div>

        <div className="item">
          <div className="item__img">
            <figure></figure>
            <img
              className="item__img--img"
              src="https://i.scdn.co/image/b2a2eab1ac3520b9b9bdbabdec7e4dbed07872bc"
              alt="siema"
            />
            <div className="item__index">1</div>
          </div>
          <div className="item__details">
            <div className="item__spotify-link">X</div>
            <div className="item__artist">Triple One</div>
            <div className="item__title">Triple Lakes</div>
            <div className="item__popularity">X X X</div>
          </div>
        </div>

        <div className="item">
          <div className="item__img">
            <figure></figure>
            <img
              className="item__img--img"
              src="https://i.scdn.co/image/b2a2eab1ac3520b9b9bdbabdec7e4dbed07872bc"
              alt="siema"
            />
            <div className="item__index">1</div>
          </div>
          <div className="item__details">
            <div className="item__spotify-link">X</div>
            <div className="item__artist">Triple One</div>
            <div className="item__title">Triple Lakes</div>
            <div className="item__popularity">X X X</div>
          </div>
        </div>

        <div className="item">
          <div className="item__img">
            <figure></figure>
            <img
              className="item__img--img"
              src="https://i.scdn.co/image/b2a2eab1ac3520b9b9bdbabdec7e4dbed07872bc"
              alt="siema"
            />
            <div className="item__index">1</div>
          </div>
          <div className="item__details">
            <div className="item__spotify-link">X</div>
            <div className="item__artist">Triple One</div>
            <div className="item__title">Triple Lakes</div>
            <div className="item__popularity">X X X</div>
          </div>
        </div>

        <div className="item">
          <div className="item__img">
            <figure></figure>
            <img
              className="item__img--img"
              src="https://i.scdn.co/image/b2a2eab1ac3520b9b9bdbabdec7e4dbed07872bc"
              alt="siema"
            />
            <div className="item__index">1</div>
          </div>
          <div className="item__details">
            <div className="item__spotify-link">X</div>
            <div className="item__artist">Triple One</div>
            <div className="item__title">Triple Lakes</div>
            <div className="item__popularity">X X X</div>
          </div>
        </div>

        <div className="item">
          <div className="item__img">
            <figure></figure>
            <img
              className="item__img--img"
              src="https://i.scdn.co/image/b2a2eab1ac3520b9b9bdbabdec7e4dbed07872bc"
              alt="siema"
            />
            <div className="item__index">1</div>
          </div>
          <div className="item__details">
            <div className="item__spotify-link">X</div>
            <div className="item__artist">Triple One</div>
            <div className="item__title">Triple Lakes</div>
            <div className="item__popularity">X X X</div>
          </div>
        </div>

        <div className="item">
          <div className="item__img">
            <figure></figure>
            <img
              className="item__img--img"
              src="https://i.scdn.co/image/b2a2eab1ac3520b9b9bdbabdec7e4dbed07872bc"
              alt="siema"
            />
            <div className="item__index">1</div>
          </div>
          <div className="item__details">
            <div className="item__spotify-link">X</div>
            <div className="item__artist">Triple One</div>
            <div className="item__title">Triple Lakes</div>
            <div className="item__popularity">X X X</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
