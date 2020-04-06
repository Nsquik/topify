import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import context from "../../../context/TokenContext";
import Cookies from "js-cookie";
import Header from "./Header";
import Details from "./Details/Details";

const HeaderContainer = () => {
  const TokenContext = useContext(context);

  const [data, setData] = useState({ email: null, status: null });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Axios.get(`https://api.spotify.com/v1/me`, {
          headers: {
            Authorization: `Bearer ${TokenContext.token}`,
          },
        });

        setData({ email: response.data.display_name, status: response.data.product });
      } catch (err) {
        Cookies.remove("token");
      }
    };
    getData();
  }, [TokenContext.token]);

  return (
    <Header>
      <Details data={data} />
    </Header>
  );
};

export default HeaderContainer;
