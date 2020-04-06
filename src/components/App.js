import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import { TokenContext } from "../context/TokenContext";

import Login from "./Login/LoginContainer";
import Dashboard from "./NewDashboard/NewDashboardContainer";

import { ProtectedLogin } from "../routes/ProtectedLogin";
import { ProtectedComponent } from "../routes/ProtectedComponent";
import history from "../history";

import "./App.scss";

const App = () => {
  return (
    <TokenContext>
      <div className="app">
        <Router history={history}>
          <Switch>
            <ProtectedComponent exact path="/" component={Dashboard} />
            <ProtectedLogin path="/login" component={Login} />
            <Route>
              {/* This happens when URL is not found */}
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    </TokenContext>
  );
};

export default App;
