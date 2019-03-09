import React from "react";

const Logo = ({ type }) => {
  return (
    <div className="logo" style={{ width: "100px" }}>
      <img
        style={{ width: "100%" }}
        src={`https://res.cloudinary.com/ahendouz/image/upload/c_scale,w_200/${
          type === "main"
            ? "v1551952364/new_logo.png"
            : "/v1551952364/New_green_logo.png "
        }`}
        alt="jible logo"
      />
    </div>
  );
};
export default Logo;
