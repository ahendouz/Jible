import React from "react";
import { Link } from "react-router-dom";

import { BtnGreenStyle } from "../../styles";

const RequistBag = () => {
  return (
    <div>
      <Link to="/request_bag">
        <BtnGreenStyle style={{ padding: "5rem 3rem" }}>
          <p>request sckara</p>
        </BtnGreenStyle>
      </Link>
    </div>
  );
};

export default RequistBag;
