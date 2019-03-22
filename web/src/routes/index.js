import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Components.
import Navbar from "../components/layout/Navbar";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import RequestSekhra from "../components/RequestSekhra/RequestSekhra";
import Footer from "../components/layout/Footer";

import PrivateRoute from "../lib/PrivateRoute";

export const Root = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/request_sekhra" component={RequestSekhra} />
        {/* <Redirect to="/" />; */}
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);
