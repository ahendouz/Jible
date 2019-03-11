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

  componentDidMount = () => {
    const {
      user: { name, email, avatar, number }
    } = this.props;

    this.fillForms(name, email, avatar, number);
  };

  componentWillReceiveProps = nextProps => {
    const { name, email, avatar, number } = nextProps.user;
    console.log("💕");
    this.fillForms(name, email, avatar, number);
  };

  fillForms = (name, email, avatar, number) => {
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
    console.log("🚨🚨🌝", this.props);
    return (
      <div className="dashboard_edit-profile">
        <div>
          <div className="user_info">
            <div className="user_avatar">
              <img
                src="https://d3iw72m71ie81c.cloudfront.net/female-75.jpg"
                alt="user profile avatar"
              />
            </div>
            <div className="info">
              <p>{name}</p>
              <p>{number}</p>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <TextFieldGroup
              placeholder=""
              name="name"
              type="text"
              value={name}
              info="Full name"
              onChange={this.handleChange}
            />
            <TextFieldGroup
              placeholder=" "
              name="email"
              type="email"
              value={email}
              info="Email Address"
              onChange={this.handleChange}
            />
            <TextFieldGroup
              placeholder=""
              name="avatar"
              type="text"
              value={avatar}
              info="Profile image"
              onChange={this.handleChange}
            />
            {method !== "facebook" && (
              <TextFieldGroup
                placeholder=""
                name="password"
                type="password"
                value={password}
                info="Your Password"
                onChange={this.handleChange}
              />
            )}
            <TextFieldGroup
              placeholder=""
              name="number"
              type="number"
              value={number}
              info="Phone"
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
