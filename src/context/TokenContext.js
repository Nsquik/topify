import React, { useState, useEffect } from "react";
import useCheckTokenCookie from "../hooks/useCheckTokenCookie";

const Context = React.createContext(null);

export const TokenContext = (props) => {
  const cookie = useCheckTokenCookie();
  console.log(cookie);
  const [token, setToken] = useState(cookie);

  useEffect(() => {
    console.log("HI");
    return () => {};
  }, []);

  return <Context.Provider value={{ token, setToken }}>{props.children}</Context.Provider>;
};

export default Context;
