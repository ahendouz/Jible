import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";

import { BtnGreenStyle } from "../../styles";
import TextFieldGroup from "../common/TextFieldGroup";
import { getMap } from "../../utils/getMap";

class RequistBag extends Component {
  state = {
    description: "",
    items: "",
    from: "",
    to: "",
    distance: "",
    ridePrice: "",
    time: "",
    shapePoints: [],
    bagProcess: "request"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {
    getMap([this.props.lat, this.props.lng]);
    this.setLocation();
  };

  componentWillUpdate = (nextProps, nextState) => {
    if (nextState.shapePoints.length > 1) {
      this.setLocation(nextState.shapePoints);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { success, bagProcess, description, items, from, to } = this.state;
    const bagDescription = {
      description,
      items,
      from,
      to,
      orderProcess: "ready to order"
    };
    if (bagProcess === "request") {
      axios
        .post("api/request/request_bag", bagDescription)
        .then(res => {
          const { success, distance, ridePrice, shapePoints, time } = res.data;
          this.setState({
            success,
            distance,
            ridePrice,
            shapePoints,
            time,
            bagProcess: "between"
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else if (bagProcess === "between" && success) {
      axios
        .post("api/request/add_bag", bagDescription)
        .then(res => console.log("🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼", res.data))
        .catch(err => console.log("🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼", err));
    }
  };

  setLocation = (
    shapePoints = [[33.995647, -6.846076], [33.995647, -6.846076]]
  ) => {
    window.L.mapquest.directions().route({
      waypoints: shapePoints
    });
  };

  render() {
    const {
      description,
      items,
      from,
      to,
      ridePrice,
      distance,
      bagProcess,
      time
    } = this.state;
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

          <div id="map">
            {bagProcess === "between" && (
              <div className="bag_info">
                <div>
                  <p>Estimated Price</p>
                  <p>{ridePrice}</p>
                </div>
                <div>
                  <p>Estimated time and distance</p>
                  <p className="distance">{`${distance}km`}</p> <span>/</span>
                  <p className="time">{time}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </RequestBagStyles>
    );
  }
}

const mapStateToProps = ({ locations: { user_location } }) => ({
  lat: user_location.lat,
  lng: user_location.lng
});
export default connect(mapStateToProps)(RequistBag);

const RequestBagStyles = styled.div`
  padding: 7rem 0;
  min-height: 70vh;
  > h1 {
    font-size: 3.2rem;
    margin-bottom: 5rem;
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
      .bag_info {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 1rem;
        background: ${props => props.theme.white};
        font-family: Regular;
        position: absolute;
        bottom: 0;
        left: 0px;
        width: 96.5%;
        z-index: 9999;
        margin: 2%;
        display: inline-block;
        > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          > p:first-child {
            font-size: 1.6rem;
          }
          > p:last-child {
            color: ${props => props.theme.green};
          }
        }
        > div:last-child {
          > p:first-child {
            font-size: 1rem;
            margin-right: auto;
          }
          > p:not(:first-child) {
            color: ${props => props.theme.gray_1};
          }
          span {
            margin: 0 2px;
            color: ${props => props.theme.gray_1};
          }
        }
      }
    }
  }
`;
