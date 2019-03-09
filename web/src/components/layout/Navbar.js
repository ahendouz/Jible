import React from "react";
import NavbarUnAuth from "../../components/NavbarState/NavbarUnAuth";
// import NavbarAuth from "../../components/NavbarState/NavbarAuth";

import { NavbarStyle } from "../../styles/Navbar";
import Logo from "../../ui/Logo";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo type="main" />
      <div className="navbar_state">
        <NavbarUnAuth />
        {/* <NavbarAuth /> */}
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
