import React, { Component } from "react";

import { Home } from "styled-icons/feather/Home";
import { Motorcycle } from "styled-icons/fa-solid/Motorcycle";
import { ArrowRight } from "styled-icons/feather/ArrowRight";

import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

import { BtnGreenStyle, BtnWhiteStyle } from "../../styles";

class Banner extends Component {
  state = {
    userType: "consumer",
    authType: "signup",
    opened: false
  };

  componentDidMount = () => {
    this.setState({
      authType: this.props.authType
    });
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ authType: nextProps.authType });
  };

  closeDrop = () => {
    this.setState({ opened: false });
  };

  render() {
    const { authType, userType } = this.state;
    let drop;
    if (this.state.opened) {
      if (this.state.authType === "signup") {
        drop = <Signup userType={userType} closeDrop={this.closeDrop} />;
      } else if (this.state.authType === "signin") {
        drop = <Signin userType={userType} closeDrop={this.closeDrop} />;
      }
    } else {
      drop = null;
    }
    return (
      <div className="banner">
        {drop}
        <div className="contant wrapper">
          <p>
            an on demand service that picks-up anything you requested through
            the app and delivers it to your door within one hour
          </p>
          <div className="btns">
            <BtnGreenStyle
              onClick={() => {
                this.setState({ opened: true, userType: "consumer" });
              }}
            >
              <Home />
              {`${authType} as a consumer`}
              <ArrowRight className="arrow" />
            </BtnGreenStyle>
            <BtnWhiteStyle
              onClick={() => {
                this.setState({ opened: true, userType: "rider" });
              }}
            >
              <Motorcycle />
              {`${authType} as a rider`}
              <ArrowRight className="arrow" />
            </BtnWhiteStyle>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
