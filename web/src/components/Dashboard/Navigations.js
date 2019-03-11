import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = () => {
  const styles = {
    color: "white",
    padding: "1rem 10rem 1rem 3rem",
    borderRadius: "5px",
    background: "#419d78"
  };
  return (
    <div>
      <NavLink activeStyle={styles} to="/dashboard/my_bags">
        my bags
      </NavLink>
      <NavLink activeStyle={styles} to="/dashboard/profile">
        my profile
      </NavLink>
      <NavLink activeStyle={styles} to="/dashboard/my_address">
        my address
      </NavLink>
      <NavLink activeStyle={styles} to="/dashboard/fqa">
        FAQ
      </NavLink>
    </div>
  );
};
export default Navigations;
