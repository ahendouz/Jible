import React, { Component } from "react";
import axios from "axios";

import { AuthDropStyle } from "../../styles";
import TextFieldGroup from "../common/TextFieldGroup";
import { Close } from "styled-icons/material/Close";
import { BtnGreenStyle, BtnFbStyle } from "../../styles";
import { handleFbOAuth } from "../../utils/handleFbOAuth";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
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
    const { userType } = this.props;
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password
    };
    axios
      .post(`api/users/signup/${userType}`, newUser)
      .then(res => console.log(res))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { closeDrop, userType } = this.props;
    const { name, email, phone_number, password } = this.state;
    return (
      <AuthDropStyle onClick={closeDrop}>
        <div onClick={e => e.stopPropagation()}>
          <Close className="close" onClick={closeDrop} />

          <h1>Signup</h1>
          <p>Welcome to jible services</p>
          <form onSubmit={this.handleSubmit}>
            <TextFieldGroup
              placeholder="Full name"
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
            <TextFieldGroup
              placeholder="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
            <TextFieldGroup
              placeholder="Your Phone Number"
              name="phone_number"
              type="text"
              value={phone_number}
              onChange={this.handleChange}
            />
            <TextFieldGroup
              placeholder="Your Password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
            <BtnGreenStyle type="submit">Signup</BtnGreenStyle>
          </form>
          <BtnFbStyle onClick={() => handleFbOAuth(userType)}>
            Signup with facebook
          </BtnFbStyle>
        </div>
      </AuthDropStyle>
    );
  }
}
export default Signup;
