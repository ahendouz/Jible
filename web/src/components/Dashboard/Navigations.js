import React from "react";
import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <div>
      <Link to="/dashboard/my_bags">my bags</Link>
      <Link to="/dashboard/profile">my profile</Link>
      <Link to="/dashboard/my_address">my address</Link>
      <Link to="/dashboard/fqa">FAQ</Link>
    </div>
  );
};
export default Navigations;
