import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { getMap } from "../../utils/getMap";

class BagsTodo extends Component {
  stste = {
    bags: []
  };

  componentDidMount = async () => {
    const bagsTodo = await axios.get("/api/request/bags_todo");
    console.log(bagsTodo);
    const { bags } = bagsTodo.data;
    const { coordinates } = bagsTodo.data;
    // console.log(bags);
    this.setState({ bags: bags });
    getMap();
    window.L.mapquest.directions().route({
      start: bags[0].from,
      end: bags[0].to,
      waypoints: [coordinates]
    });
  };
  render() {
    return (
      <BagsTodoStyle>
        <h1>Bags Todo</h1>
        <div id="map" style={{ width: "100%", height: "45vh" }} />
      </BagsTodoStyle>
    );
  }
}

export default BagsTodo;

const BagsTodoStyle = styled.div`
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
