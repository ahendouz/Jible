import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import { BtnGreenStyle } from "../../styles";
import TextFieldGroup from "../common/TextFieldGroup";

class RequistBag extends Component {
  state = {
    description: "",
    items: "",
    from: "",
    to: "",
    orderProcess: "start"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {
    window.L.mapquest.key = "iKQ5jnvoW6jeJCwdTYpIMevMRlkYgtAz";

    // 'map' refers to a <div> element with the ID map
    window.L.mapquest.map("map", {
      center: [33.995647, -6.846076],
      layers: window.L.mapquest.tileLayer("dark"),
      zoom: 12
    });
    this.setLocation();
  };

  componentWillUpdate = (nextProps, nextState) => {
    if (nextState.shapePoints.length > 1) {
      this.setLocation(nextState.shapePoints);
    }
  };

  setLocation = (
    shapePoints = [[33.995647, -6.846076], [33.995647, -6.846076]]
  ) => {
    window.L.mapquest.directions().route({
      waypoints: shapePoints
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { description, items, from, to } = this.state;
    const bagDescription = {
      description,
      items,
      from,
      to,
      orderProcess: "ready to order"
    };

    axios.post("api/request/request_bag", bagDescription).then(res => {
      // TODO Redirct to my bugs
      const { distance, ridePrice, shapePoints, time } = res.data;
      console.log("🔥🔥🔥🔥shapePoints🔥🔥🔥🔥", shapePoints);
      this.setState({
        distance,
        ridePrice,
        shapePoints,
        time
      });
    });
  };

  render() {
    const { description, items, from, to } = this.state;
    return (
      <RequestBagStyles className="wrapper">
        <h1>Request a bag</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <TextFieldGroup
              name="description"
              type="text"
              value={description}
              onChange={this.handleChange}
              info="Describe your item"
            />
            <TextFieldGroup
              info="Item"
              name="items"
              type="text"
              value={items}
              onChange={this.handleChange}
            />
            <TextFieldGroup
              info="adress"
              name="from"
              type="text"
              value={from}
              onChange={this.handleChange}
            />
            <TextFieldGroup
              name="to"
              type="text"
              value={to}
              onChange={this.handleChange}
            />
            <BtnGreenStyle type="submit">Order now</BtnGreenStyle>
          </form>

          <div id="map" />
        </div>
      </RequestBagStyles>
    );
  }
}
export default RequistBag;

const RequestBagStyles = styled.div`
  padding: 7rem 0;
  min-height: 70vh;
  > h1 {
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }
  > div {
    display: flex;
    justify-content: space-between;
    form {
      flex: 1;
      margin-right: 1rem;
      button {
        width: 100%;
      }
    }
    > div {
      flex: 1;
      margin-left: 1rem;
      background: #eee;
    }
  }
`;
