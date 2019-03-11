import React from "react";

const NavbarAuth = ({ user: { name, avatar } }) => {
  console.log("🚌🚌🚌🚌", avatar);
  return (
    <div className="navbar_authorized">
      <div>
        {/* TODO: change the pict to a valid pict */}
        <img src={avatar} alt="user profile avatar" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default NavbarAuth;
