import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { HomeStyle } from "../styles/Home";
import { MyContext } from "../context/authTypeContext";

import Banner from "./layout/Banner";
import HowItWorks from "./layout/HowItWorks";
import DownloadApp from "./layout/DownloadApp";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard/profile" />;
  } else {
    return (
      <HomeStyle>
        <MyContext.Consumer>
          {context => <Banner authType={context.state.type} />}
        </MyContext.Consumer>

        <HowItWorks />
        <DownloadApp />
      </HomeStyle>
    );
  }
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
});

export default connect(mapStateToProps)(Home);
