import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components.
import Navbar from "../components/layout/Navbar";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import Footer from "../components/layout/Footer";

export const Root = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);
