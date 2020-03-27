import React from "react";
import Authorization from "../apis/Authorization";

const App = () => {
  const Auth = () => {
    console.log("hello");
    Authorization();
  };

  return (
    <div className="app">
      <a href={Authorization}>HELLO</a>
    </div>
  );
};

export default App;
