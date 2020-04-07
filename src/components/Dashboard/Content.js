import React, { useEffect, useState, useContext } from "react";
import img from "../../images/siemka.jpg";
import img2 from "../../images/unknown.jpg";
import axios from "axios";
import TokenContext from "../../context/TokenContext";

const Content = (props) => {
  const [state, setState] = useState(null);
  const { token } = useContext(TokenContext);

  const getData = async () => {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/${props.type}?limit=50&offset=0&time_range=${props.timeperiod}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setState(response.data);
  };

  useEffect(() => {
    getData();
  }, [props.type]);

  console.log(state);

  return (
    <div className="content">
      <div className="content__row">
        <div className="content__number content__number--first">1</div>
        <div className="content__main">
          <div className="content__img">
            <img src={img} alt="elo" />
          </div>
          <div className="content__details">
            <div className="content__artist">SCHAFTER</div>
            <div className="content__title content__title--first">DOUBLE D's</div>
          </div>
        </div>
        <div className="content__spotify-redirect">x</div>
      </div>
      <div className="content__row">
        <div className="content__number content__number--second">2</div>
        <div className="content__main">
          <div className="content__img">
            <img src={img} alt="elo" />
          </div>
          <div className="content__details">
            <div className="content__artist">ED SCIERAN</div>
            <div className="content__title content__title--second">FIRE</div>
          </div>
        </div>
        <div className="content__spotify-redirect"></div>
      </div>
      <div className="content__row">
        <div className="content__number content__number--third">3</div>
        <div className="content__main">
          <div className="content__img">
            <img src={img2} alt="elo" />
          </div>
          <div className="content__details">
            <div className="content__artist">ED SCIERAN</div>
            <div className="content__title content__title--third">
              siema heniu siema heniusiema heniusiema heniusiema heniusiema heniu
            </div>
          </div>
        </div>
        <div className="content__spotify-redirect"></div>
      </div>
      <div className="content__row">
        <div className="content__number">1</div>
        <div className="content__main">
          <div className="content__img">X</div>
          <div className="content__details">
            <div className="content__artist">ED SCIERAN</div>
            <div className="content__title">FIRE</div>
          </div>
        </div>
        <div className="content__spotify-redirect"></div>
      </div>
      <div className="content__row">
        <div className="content__number">1</div>
        <div className="content__main">
          <div className="content__img">X</div>
          <div className="content__details">
            <div className="content__artist">ED SCIERAN</div>
            <div className="content__title">FIRE</div>
          </div>
        </div>
        <div className="content__spotify-redirect"></div>
      </div>
      <div className="content__row">
        <div className="content__number">1</div>
        <div className="content__main">
          <div className="content__img">X</div>
          <div className="content__details">
            <div className="content__artist">ED SCIERAN</div>
            <div className="content__title">FIRE</div>
          </div>
        </div>
        <div className="content__spotify-redirect"></div>
      </div>
      <div className="content__row">
        <div className="content__number">1</div>
        <div className="content__main">
          <div className="content__img">X</div>
          <div className="content__details">
            <div className="content__artist">ED SCIERAN</div>
            <div className="content__title">FIRE</div>
          </div>
        </div>
        <div className="content__spotify-redirect"></div>
      </div>
      <div className="content__row">
        <div className="content__number">1</div>
        <div className="content__main">
          <div className="content__img">X</div>
          <div className="content__details">
            <div className="content__artist">ED SCIERAN</div>
            <div className="content__title">FIRE</div>
          </div>
        </div>
        <div className="content__spotify-redirect"></div>
      </div>
      <div className="content__row">
        <div className="content__number">1</div>
        <div className="content__main">
          <div className="content__img">X</div>
          <div className="content__details">
            <div className="content__artist">ED SCIERAN</div>
            <div className="content__title">FIRE</div>
          </div>
        </div>
        <div className="content__spotify-redirect"></div>
      </div>
      <div className="content__row">
        <div className="content__number">1</div>
        <div className="content__main">
          <div className="content__img">X</div>
          <div className="content__details">
            <div className="content__artist">ED SCIERAN</div>
            <div className="content__title">FIRE</div>
          </div>
        </div>
        <div className="content__spotify-redirect"></div>
      </div>
    </div>
  );
};

export default Content;
