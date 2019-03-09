import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components.
import Navbar from "../components/layout/Navbar";
import Home from "../components/Home";

export const Root = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route component={Home} />
      </Switch>
    </Fragment>
  </Router>
);
