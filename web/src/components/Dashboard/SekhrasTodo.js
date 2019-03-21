import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { getMap } from "../../utils/getMap";

class sekhrasTodo extends Component {
  stste = {
    sekhras: []
  };

  componentDidMount = async () => {
    const sekhrasTodo = await axios.get("/api/request/sekhras_todo");
    console.log(sekhrasTodo);
    const { sekhras } = sekhrasTodo.data;
    const { coordinates } = sekhrasTodo.data;
    // console.log(sekhras);
    this.setState({ sekhras: sekhras });
    getMap();
    window.L.mapquest.directions().route({
      start: sekhras[0].from,
      end: sekhras[0].to,
      waypoints: [coordinates]
    });
  };
  render() {
    return (
      <sekhrasTodoStyle>
        <h1>sekhras Todo</h1>
        <div id="map" style={{ width: "100%", height: "45vh" }} />
      </sekhrasTodoStyle>
    );
  }
}

export default sekhrasTodo;

const sekhrasTodoStyle = styled.div`
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
