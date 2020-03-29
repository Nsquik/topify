import React from "react";
import Login from "./Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { TokenContext } from "../context/TokenContext";

import "./App.scss";

const App = () => {
  return (
    <TokenContext>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <div>hello</div>
            </Route>
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    </TokenContext>
  );
};

export default App;
