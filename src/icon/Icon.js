import React from "react";
import Search from "./Search";
import User from "./User";

const Icon = (props) => {
  switch (props.name) {
    case "search":
      return <Search {...props} />;
    case "user":
      return <User {...props} />;
    default:
      return;
  }
};

export default Icon;
