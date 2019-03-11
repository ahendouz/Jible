import React from "react";
import { Bell } from "styled-icons/boxicons-regular/Bell";

const NavbarAuth = ({ user: { name, avatar } }) => {
  return (
    <div className="navbar_authorized">
      <Bell />
      <div>
        <img src={avatar} alt="user profile avatar" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default NavbarAuth;
