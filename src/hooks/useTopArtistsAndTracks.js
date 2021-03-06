import { useState, useContext, useEffect } from "react";
import context from "../context/TokenContext";
import Axios from "axios";
import Cookies from "js-cookie";

const useTopArtistsAndTracks = (type, time_range) => {
  const [data, setData] = useState({
    spotifyData: null,
    loading: true,
  });

  const TokenContext = useContext(context);

  useEffect(() => {
    const getData = async () => {
      try {
        setData({ spotifyData: null, loading: true });
        const response = await Axios.get(
          `https://api.spotify.com/v1/me/top/${type}?limit=50&offset=0&time_range=${time_range}`,
          {
            headers: {
              Authorization: `Bearer ${TokenContext.token}`,
            },
          }
        );

        setData({ spotifyData: response.data, loading: false });
        return () => response && response.abort();
      } catch (err) {
        console.error(err);
        Cookies.remove("token");
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, time_range]);

  return data;
};

export default useTopArtistsAndTracks;
