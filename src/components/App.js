import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { TokenContext } from "../context/TokenContext";
import { SpotifyDataContext } from "../context/SpotifyDataContext";

import Login from "./Login/LoginContainer";
import Dashboard from "./NewDashboard/NewDashboardContainer";

import { ProtectedLogin } from "../routes/ProtectedLogin";
import { ProtectedComponent } from "../routes/ProtectedComponent";

import "./App.scss";

const App = () => {
  return (
    <TokenContext>
      <SpotifyDataContext>
        <div className="app">
          <Router>
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
      </SpotifyDataContext>
    </TokenContext>
  );
};

export default App;
