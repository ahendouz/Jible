import React from "react";
import { FooterStyle } from "../../styles";

import Logo from "../../ui/Logo";

const Footer = () => {
  return (
    <FooterStyle>
      <Logo type="footer" />
      <ul className="links">
        <li>About</li>
        <span> &ndash; </span>
        <li>Terms</li>
        <span> &ndash; </span>
        <li>Privecy Policy</li>
      </ul>
    </FooterStyle>
  );
};

export default Footer;
