import React, { Component } from "react";
import { AuthDropStyle } from "../../styles";
import TextFieldGroup from "../common/TextFieldGroup";
import { Close } from "styled-icons/material/Close";
import { BtnGreenStyle, BtnFbStyle } from "../../styles";
import axios from "axios";
import { handleFbOAuth } from "../../utils/handleFbOAuth";

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
    const { email, password } = this.state;
    const userInfo = {
      email,
      password
    };
    axios
      .post(`api/users/signin`, userInfo)
      .then(res => console.log(res))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { closeDrop, userType } = this.props;
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

          <BtnFbStyle onClick={() => handleFbOAuth(userType)}>
            Signin with facebook
          </BtnFbStyle>
        </div>
      </AuthDropStyle>
    );
  }
}
export default Signin;
