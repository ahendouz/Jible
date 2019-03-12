import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { Bell } from "styled-icons/boxicons-regular/Bell";
import { BtnGreenStyle } from "../../styles";

const NavbarAuth = ({ user: { name, avatar }, logoutUser, history }) => {
  return (
    <div className="navbar_authorized">
      <Bell />
      <div>
        <img src={avatar} alt="user profile avatar" />
      </div>
      <p>
        {name}
        <BtnGreenStyle onClick={() => logoutUser(history)}>
          Sign out
        </BtnGreenStyle>
      </p>
    </div>
  );
};

export default connect(
  null,
  { logoutUser }
)(withRouter(NavbarAuth));
