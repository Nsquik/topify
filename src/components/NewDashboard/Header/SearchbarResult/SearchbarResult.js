import React, { useEffect, useState, useContext } from "react";
import context from "../../../../context/TokenContext";
import Axios from "axios";

import "./SearchbarResult.scss";
import SearchbarItem from "./SearchbarItem";

const SearchbarResult = ({ query }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const TokenContext = useContext(context);

  useEffect(() => {
    setNotFound(false);
    setLoading(true);
    const getData = async () => {
      try {
        setData(null);
        const response = await Axios.get(
          `https://api.spotify.com/v1/search?query=${query}&type=track&offset=0&limit=1`,
          {
            headers: {
              Authorization: `Bearer ${TokenContext.token}`,
            },
          }
        );
        if (response.data.tracks.items.length === 0) {
          setNotFound(true);
        }

        setData(response.data);
        setLoading(false);
        return () => response && response.abort();
      } catch (err) {
        console.error(err);
        setNotFound(true);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="searchbar__result">
      <div className="searchbar__item">
        {notFound ? (
          <div className="searchbar__notfound">NOT FOUND</div>
        ) : loading ? (
          <Spinner />
        ) : (
          <SearchbarItem data={data} />
        )}
      </div>
    </div>
  );
};

const Spinner = () => {
  return <div className="spinner">Loading...</div>;
};

export default SearchbarResult;
