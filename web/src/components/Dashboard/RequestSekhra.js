import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BtnGreenStyle } from "../../styles";

const Requistsekhra = ({ type }) => {
  let contant;
  if (type !== "rider") {
    contant = (
      <RequistsekhraStyle>
        <Link to="/request_sekhra">
          <BtnGreenStyle style={{ padding: "5rem 3rem" }}>
            <p>Request a sekhra</p>
          </BtnGreenStyle>
        </Link>
      </RequistsekhraStyle>
    );
  } else {
    contant = null;
  }
  return contant;
};

export default Requistsekhra;

const RequistsekhraStyle = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    margin: 6rem 9rem;
    @media (max-width: 600px) {
      margin: 6rem 1rem;
    }
    button {
      width: 100%;
      padding: 1.4rem 0 !important;
    }
  }
`;
