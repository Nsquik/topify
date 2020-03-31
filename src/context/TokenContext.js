import React, { useState } from "react";
import useCheckTokenCookie from "../hooks/useCheckTokenCookie";

const Context = React.createContext(null);

export const TokenContext = (props) => {
  const cookie = useCheckTokenCookie();
  console.log(`TokenContext__Cookie: ${cookie}`);

  const [token, setToken] = useState(cookie);

  // useEffect(() => {
  //   setToken(cookie);
  // }, [cookie]);

  return <Context.Provider value={{ token, setToken }}>{props.children}</Context.Provider>;
};

export default Context;
