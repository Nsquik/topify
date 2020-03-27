import axios from "axios";
import { config } from "../config";

const Authorization = async () => {
  return await axios.get(
    `https://accounts.spotify.com/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${
      config.AUTH_REDIRECT_URI
    }&scope=${config.SCOPES.join("%20")}&response_type=token&state=6969`
  );
};

const AUTH = `https://accounts.spotify.com/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${
  config.AUTH_REDIRECT_URI
}&scope=${config.SCOPES.join("%20")}&response_type=token&state=6969`;

export default AUTH;
