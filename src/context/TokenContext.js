import React, { useState } from "react";
import useCheckTokenCookie from "../hooks/useCheckTokenCookie";

const Context = React.createContext(null);

export const TokenContext = (props) => {
  const cookie = useCheckTokenCookie();

  const [token, setToken] = useState(cookie);

  return <Context.Provider value={{ token, setToken }}>{props.children}</Context.Provider>;
};

export default Context;
