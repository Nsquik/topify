import { config } from "../config";
import axios from "axios";

// time ranges =
//     - long_term( several years),
//     - medium_term( 6 last months),
//     - short_term(last 4 weeks)

export const getTopArtists = async (token, time_range) => {
  try {
    await axios
      .get(`https://api.spotify.com/v1/me/top/artists?limit=10&offset=0&time_range=short_term`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((data) => {
        return data;
      });
  } catch (e) {
    console.error("FAILURE!");
    console.error(e.response.status);
  }
};
