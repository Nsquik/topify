import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";
import context from "../context/TokenContext";

export const ProtectedComponent = ({ component: Component, ...rest }) => {
  const TokenContext = useContext(context);

  return (
    <Route
      {...rest}
      render={(props) => (TokenContext.token ? <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />)}
    />
  );
};
