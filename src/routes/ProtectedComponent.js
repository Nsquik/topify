import React, { useContext, useEffect } from "react";

import { Route, Redirect } from "react-router-dom";
import context from "../context/TokenContext";
import useCheckTokenCookie from "../hooks/useCheckTokenCookie";

import { SpotifyDataContext } from "../context/SpotifyDataContext";

export const ProtectedComponent = ({ component: Component, ...rest }) => {
  const TokenContext = useContext(context);
  const cookie = useCheckTokenCookie();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    TokenContext.setToken(cookie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookie]);

  return (
    <SpotifyDataContext>
      <Route
        {...rest}
        render={(props) => (TokenContext.token ? <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />)}
      />
    </SpotifyDataContext>
  );
};
