import React, { useState, useEffect } from "react";
import useCheckTokenCookie from "../hooks/useCheckTokenCookie";
import Cookies from "js-cookie";

const Context = React.createContext(null);

export const TokenContext = (props) => {
  const cookie = useCheckTokenCookie();
  console.log(`TokenContext__Cookie: ${cookie}`);

  const [token, setToken] = useState(Cookies.get("token"));

  useEffect(() => {
    setToken(cookie);
  }, [cookie]);

  return <Context.Provider value={{ token, setToken }}>{props.children}</Context.Provider>;
};

export default Context;
