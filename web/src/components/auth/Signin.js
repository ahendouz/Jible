import React, { Component } from "react";
import { connect } from "react-redux";

import { AuthDropStyle } from "../../styles";
import TextFieldGroup from "../common/TextFieldGroup";
import { Close } from "styled-icons/material/Close";
import { BtnGreenStyle, BtnFbStyle } from "../../styles";
import { handleFbOAuth } from "../../utils/handleFbOAuth";
import {
  signinUserAction,
  facebookOAuthAction
} from "../../actions/authActions";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { signinUserAction } = this.props;
    const { email, password } = this.state;
    const userInfo = {
      email,
      password
    };
    signinUserAction(userInfo);
  };

  render() {
    const { closeDrop, userType, facebookOAuthAction } = this.props;
    const { email, password } = this.state;
    return (
      <AuthDropStyle onClick={closeDrop}>
        <div onClick={e => e.stopPropagation()}>
          <Close className="close" onClick={closeDrop} />
          <h1>Signin</h1>
          <p>Welcome to jible services</p>
          <form onSubmit={this.handleSubmit}>
            <TextFieldGroup
              placeholder="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
            <TextFieldGroup
              placeholder="Your Password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
            <BtnGreenStyle type="submit">signin</BtnGreenStyle>
          </form>

          <BtnFbStyle
            onClick={() => handleFbOAuth(userType, facebookOAuthAction)}
          >
            Signin with facebook
          </BtnFbStyle>
        </div>
      </AuthDropStyle>
    );
  }
}
export default connect(
  null,
  { signinUserAction, facebookOAuthAction }
)(Signin);
