import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = ({ type }) => {
  const styles = {
    color: "white",
    padding: "1rem 10rem 1rem 3rem",
    borderRadius: "5px",
    background: "#419d78"
  };
  let navigations;
  if (type === "consumer") {
    navigations = (
      <div>
        <NavLink activeStyle={styles} to="/dashboard/my_sekhras">
          my sekhras
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
  } else {
    navigations = (
      <div>
        <NavLink activeStyle={styles} to="/dashboard/sekhras_todo">
          sekhra TODO
        </NavLink>
        <NavLink activeStyle={styles} to="/dashboard/profile">
          My profile
        </NavLink>
        <NavLink activeStyle={styles} to="/dashboard/state">
          State
        </NavLink>
      </div>
    );
  }
  return <React.Fragment>{navigations}</React.Fragment>;
};
export default Navigations;
