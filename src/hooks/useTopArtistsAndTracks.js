import { useState, useContext, useEffect } from "react";
import context from "../context/TokenContext";
import Axios from "axios";
import Cookies from "js-cookie";

const useTopArtistsAndTracks = (type, time_range, setLoading) => {
  const [data, setData] = useState({
    data: null,
    loading: true
  });
  const TokenContext = useContext(context);
  console.log(`type: ${time_range}`);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Axios.get(
          `https://api.spotify.com/v1/me/top/${type}?limit=10&offset=0&time_range=${time_range}`,
          {
            headers: {
              Authorization: `Bearer ${TokenContext.token}`
            }
          }
        );
        setData({ data: response.data, loading: false });
      } catch (err) {
        Cookies.remove("token");
      }
    };

    getData();
  }, [type, time_range]);

  return data;
};

export default useTopArtistsAndTracks;
