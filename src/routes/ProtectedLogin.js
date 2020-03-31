import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";
import context from "../context/TokenContext";

export const ProtectedLogin = ({ component: Component, ...rest }) => {
  const TokenContext = useContext(context);

  return (
    <Route
      {...rest}
      render={(props) => (TokenContext.token ? <Redirect to={{ pathname: "/" }} /> : <Component {...props} />)}
    />
  );
};
