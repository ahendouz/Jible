import React, { Component } from "react";
import { HomeStyle } from "../styles/Home";
import { MyContext } from "../context/authTypeContext";

import Banner from "./layout/Banner";
import HowItWorks from "./layout/HowItWorks";
import DownloadApp from "./layout/DownloadApp";
import Footer from "./layout/Footer";

class Home extends Component {
  render() {
    return (
      <HomeStyle>
        <MyContext.Consumer>
          {context => <Banner authType={context.state.type} />}
        </MyContext.Consumer>

        <HowItWorks />
        <DownloadApp />
        <Footer />
      </HomeStyle>
    );
  }
}

export default Home;
