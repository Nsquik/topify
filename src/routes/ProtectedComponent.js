import React, { useContext, useEffect } from "react";

import { Route, Redirect } from "react-router-dom";
import context from "../context/TokenContext";
import useCheckTokenCookie from "../hooks/useCheckTokenCookie";

export const ProtectedComponent = ({ component: Component, ...rest }) => {
  const TokenContext = useContext(context);
  const cookie = useCheckTokenCookie();

  useEffect(() => {
    TokenContext.setToken(cookie);
  }, [cookie, TokenContext]);

  return (
    <Route
      {...rest}
      render={(props) => (cookie ? <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />)}
    />
  );
};
