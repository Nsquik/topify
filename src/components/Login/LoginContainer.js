import React, { useContext } from "react";
import Login from "./Login";
import Cookies from "js-cookie";
import context from "../../context/TokenContext";

let hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const error = urlParams.get("error");

const LoginContainer = (props) => {
  const TokenContext = useContext(context);
  console.log(hash.access_token);

  if (hash.access_token) {
    Cookies.set("token", hash.access_token, { expires: 1 / 48 });
    TokenContext.setToken(hash.access_token);
    hash = {};
  }
  window.history.replaceState({}, document.title, "/");

  return <Login error={error} />;
};

export default LoginContainer;
