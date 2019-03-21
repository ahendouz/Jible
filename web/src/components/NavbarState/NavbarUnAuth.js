import React from "react";
import { MyContext } from "../../context/authTypeContext";
import { BtnGreenStyle, BtnWhiteStyle } from "../../styles";

const NavbarUnAuth = () => {
  return (
    <div className="navbar_unauthorized">
      <MyContext.Consumer>
        {context => (
          <div className="btns">
            <BtnGreenStyle onClick={() => context.changeState("signup")}>
              Signup
            </BtnGreenStyle>
            <BtnWhiteStyle onClick={() => context.changeState("signin")}>
              Signin
            </BtnWhiteStyle>
          </div>
        )}
      </MyContext.Consumer>
    </div>
  );
};

export default NavbarUnAuth;
