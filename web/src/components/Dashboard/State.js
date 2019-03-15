import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import { ReactComponent as Connect } from "../../icons/connect.svg";
import { ReactComponent as Disconnect } from "../../icons/disconnect.svg";

class State extends Component {
  stste = {
    bags: []
  };

  componentDidMount = async () => {
    // const State = await axios.get("/api/request/bags_todo");
    // console.log(State);
  };
  render() {
    return (
      <StateStyle>
        <h1>State</h1>
        <div>
          <Connect />
        </div>
      </StateStyle>
    );
  }
}

export default State;

const StateStyle = styled.div`
  width: 100%;
  min-height: 30rem;
  border: 1px solid ${props => props.theme.gray_2};
  padding: 1rem;
  h1 {
    color: ${props => props.theme.green};
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
