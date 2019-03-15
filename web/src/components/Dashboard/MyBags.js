import React, { Component } from "react";
import axios from "axios";
import { getMap } from "../../utils/getMap";
import styled from "styled-components";

class MyBags extends Component {
  state = {
    description: "",
    items: [],
    from: [],
    to: [],
    rider: {}
  };
  componentDidMount = async () => {
    const myBags = await axios.get("/api/request/my_bags");
    // const { myBags: myBag, rider } = myBags.data;
    const { description, items, from, to, rider } = myBags.data;
    this.setState({ description, items, rider });
    getMap();
    window.L.mapquest.directions().route({
      start: from,
      end: to,
      waypoints: [from, to, to]
    });
  };
  render() {
    const {
      description,
      items,
      rider: { avatar, name, number }
    } = this.state;
    return (
      <MyBagStyle>
        <h1>Bag 1</h1>
        <div id="map" style={{ width: "100%", height: "45vh" }} />
        <div className="bag_info">
          <div>
            <div className="description">{description}</div>
            <ul className="items">
              {items.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rider">
            <div>
              <img src={avatar} alt="rider" />
            </div>
            <div>
              <p>{name}</p> <p>05434343</p>
            </div>
          </div>
        </div>
      </MyBagStyle>
    );
  }
}
export default MyBags;

const MyBagStyle = styled.div`
  width: 100%;
  min-height: 30rem;
  border: 1px solid ${props => props.theme.gray_2};
  padding: 1rem;
  h1 {
    color: ${props => props.theme.green};
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .bag_info {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .items {
      color: #ccc;
      font-style: italic;
      font-family: Light;
      font-size: 1.3rem;
      margin-left: 2rem;
    }
    .rider {
      display: flex;
      align-items: center;
      background: #eee;
      padding: 0.6rem 1.1rem;
      border-radius: 3px;
      > div:first-of-type {
        border-radius: 50%;
        overflow: hidden;
        width: 37px;
        > img {
          width: 100%;
          vertical-align: top;
        }
      }
      > div:last-of-type {
        margin-left: 1rem;
        > p:last-of-type {
          color: #ccc;
          font-style: italic;
          font-family: Light;
          font-size: 1.3rem;
        }
      }
    }
  }
`;
