import React, { Component } from "react";
import { connect } from "react-redux";

import TextFieldGroup from "../common/TextFieldGroup";
import { BtnBlueStyle } from "../../styles";
import { editUserProfileAction } from "../../actions/profileAction";

class MyProfile extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    avatar: "",
    errors: {}
  };

  componentWillReceiveProps = nextProps => {
    const { name, email, avatar, number } = nextProps.user;
    this.setState({ name, email, avatar, number });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { signinUserAction } = this.props;
    const { name, email, password, avatar } = this.state;
    const { editUserProfileAction } = this.props;
    const profileFields = {
      name,
      email,
      password,
      avatar
    };
    editUserProfileAction(profileFields);
  };

  render() {
    const { name, email, password, avatar, number } = this.state;
    const {
      user: { method }
    } = this.props;
    console.log(method);
    return (
      <div>
        <div>
          <div>user info</div>
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
              placeholder="Profile image"
              name="avatar"
              type="avatar"
              value={avatar}
              onChange={this.handleChange}
            />
            {method !== "facebook" && (
              <TextFieldGroup
                placeholder="Your Password"
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
              />
            )}
            <TextFieldGroup
              placeholder="Your Phone Number"
              name="number"
              type="number"
              value={number}
              onChange={this.handleChange}
            />
            <BtnBlueStyle type="submit">Update</BtnBlueStyle>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { user } }) => ({
  user
});

export default connect(
  mapStateToProps,
  { editUserProfileAction }
)(MyProfile);
