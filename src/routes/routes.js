import { Route, Redirect } from "react-router-dom";
import React from "react";
import { ProtectedComponent } from "./ProtectedComponent";
import { ProtectedLogin } from "./ProtectedLogin";
import Login from "../components/Login/Login";

export const Routes = () => {
  return (
    <>
      <ProtectedComponent exact path="/" component={Hello} />
      <ProtectedLogin path="/login" component={Login} />
      <Route>
        {/* This happens when URL is not found */}
        <Redirect to="/" />
      </Route>
    </>
  );
};

const Hello = () => {
  return (
    <div>
      <button>Hello</button>
    </div>
  );
};
