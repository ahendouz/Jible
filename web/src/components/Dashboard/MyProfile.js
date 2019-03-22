import React, { Component } from "react";
import { connect } from "react-redux";

import TextFieldGroup from "../common/TextFieldGroup";
import { BtnBlueStyle } from "../../styles";
import { editUserProfileAction } from "../../actions/profileAction";

class MyProfile extends Component {
  state = {
    name: "",
    email: "",
    avatar: "",
    phoneNumber: "",
    errors: {}
  };

  componentDidMount = () => {
    const {
      user: { name, email, avatar, phoneNumber }
    } = this.props;

    this.fillForms(name, email, avatar, phoneNumber);
  };

  componentWillReceiveProps = nextProps => {
    const { name, email, avatar, phoneNumber } = nextProps.user;
    this.fillForms(name, email, avatar, phoneNumber);
  };

  fillForms = (name, email, avatar, phoneNumber) => {
    this.setState({ name, email, avatar, phoneNumber });
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
    const { name, email, phoneNumber, avatar } = this.state;
    const { editUserProfileAction } = this.props;
    const profileFields = {
      name,
      email,
      phoneNumber,
      avatar
    };
    editUserProfileAction(profileFields);
  };

  render() {
    const { name, email, avatar, phoneNumber } = this.state;
    return (
      <div className="dashboard_edit-profile">
        <div>
          <div className="user_info">
            <div className="user_avatar" style={{ alignSelf: "flex-start" }}>
              <img src={avatar} alt="user profile avatar" />
            </div>
            <div className="info">
              <p>{name}</p>
              <p style={{ fontSize: "1.1rem", color: "#ccc" }}>
                {!phoneNumber ? "Add your phone phoneNumber" : phoneNumber}
              </p>
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
            <TextFieldGroup
              placeholder=""
              name="phoneNumber"
              type="phoneNumber"
              value={phoneNumber}
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
