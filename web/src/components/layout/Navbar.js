import React from "react";
import { connect } from "react-redux";

import NavbarUnAuth from "../../components/NavbarState/NavbarUnAuth";
import NavbarAuth from "../../components/NavbarState/NavbarAuth";

import { NavbarStyle } from "../../styles/Navbar";
import Logo from "../../ui/Logo";

const Navbar = ({ isAuthenticated, user }) => {
  return (
    <NavbarStyle>
      <Logo type={isAuthenticated ? "auth" : "main"} />
      <div className="navbar_state">
        {isAuthenticated ? <NavbarAuth user={user} /> : <NavbarUnAuth />}
      </div>
    </NavbarStyle>
  );
};

const mapStateToProps = ({
  auth: {
    isAuthenticated,
    user: { name, avatar }
  }
}) => ({
  isAuthenticated,
  user: { name, avatar }
});
export default connect(mapStateToProps)(Navbar);
