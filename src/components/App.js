import React from "react";
import Login from "./Login/LoginContainer";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import { TokenContext } from "../context/TokenContext";

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
            <ProtectedComponent exact path="/" component={Hello} />
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

const Hello = () => {
  // const mycontext = useContext(context);
  // const cookie = useCheckTokenCookie();

  // useEffect(() => {
  //   mycontext.setToken(cookie);
  // }, [cookie]);

  return (
    <div>
      <button>Hello</button>
    </div>
  );
};

export default App;
