import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.js";
require("dotenv").config();

ReactDOM.render(<App />, document.querySelector("#root"));
