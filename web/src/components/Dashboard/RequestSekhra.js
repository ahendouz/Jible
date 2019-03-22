import React from "react";
import { Link } from "react-router-dom";

import { BtnGreenStyle } from "../../styles";

const Requistsekhra = () => {
  return (
    <div>
      <Link to="/request_sekhra">
        <BtnGreenStyle style={{ padding: "5rem 3rem" }}>
          <p>Request a sekhra</p>
        </BtnGreenStyle>
      </Link>
    </div>
  );
};

export default Requistsekhra;
