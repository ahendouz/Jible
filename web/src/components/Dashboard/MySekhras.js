import React, { Component } from "react";
import axios from "axios";
import { getMap } from "../../utils/getMap";
import styled from "styled-components";

class Mysekhras extends Component {
  state = {
    mySekhras: []
  };
  componentWillMount = async () => {
    const mySekhras = await axios.get("/api/sekhra/my_sekhras");
    this.setState({ mySekhras: mySekhras.data.mySekhras });

    mySekhras.data.mySekhras.map(mySekhra => {
      console.log(mySekhra._id);
      window.L.mapquest.key = "iKQ5jnvoW6jeJCwdTYpIMevMRlkYgtAz";
      // 'map' refers to a <div> element with the ID map
      window.L.mapquest.map(`${mySekhra._id}`, {
        center: [33.9955876, -6.849696100000001],
        layers: window.L.mapquest.tileLayer("map"),
        zoom: 12
      });
      window.L.mapquest.directions().route({
        start: mySekhra.from,
        end: mySekhra.to
      });
    });
    // getMap();
  };
  render() {
    const { mySekhras } = this.state;
    return (
      <MysekhraStyle>
        {mySekhras.length > 0 ? (
          mySekhras.map((mySekhra, i) => (
            <div style={{ marginBottom: "3.5rem" }}>
              <h1>{`sekhra ${i + 1}`}</h1>
              <div
                id={`${mySekhra._id}`}
                style={{ width: "100%", height: "45vh" }}
              />
              <div className="sekhra_info">
                <div>
                  <div className="description">{mySekhra.description}</div>
                  <ul className="items">
                    {mySekhra.items.map(item => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rider">
                  <div>
                    <img src={mySekhra.rider.avatar} alt="rider" />
                  </div>
                  <div>
                    <p>{mySekhra.rider.name}</p>{" "}
                    <p>{mySekhra.rider.phoneNumber}</p>
                  </div>
                </div>
              </div>
              <div className="sekhra_info_2">
                <div>
                  <p>Estimated Price</p>
                  <p>{mySekhra.cost}</p>
                </div>
                <div>
                  <p>Estimated time and distance</p>
                  <p className="distance">{`${mySekhra.distance}km`}</p>{" "}
                  <span>/</span>
                  <p className="time">{mySekhra.duration}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>You don't have any sekhra yet</h1>
        )}
      </MysekhraStyle>
    );
  }
}
export default Mysekhras;

const MysekhraStyle = styled.div`
  width: 100%;
  min-height: 30rem;
  border: 1px solid ${props => props.theme.gray_2};
  padding: 1rem;
  h1 {
    color: ${props => props.theme.green};
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .sekhra_info {
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
      padding: 0.6rem 2.2rem;
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
  .sekhra_info_2 {
    border-top: 1px solid #f1f1f1;
    padding: 1rem;
    > div:first-child {
      font-size: 2rem;
    }
    > div:last-child {
      font-size: 1.2rem;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > p:first-child {
      }
      > p:last-child {
        color: ${props => props.theme.green};
      }
    }
    > div:last-child {
      > p:first-child {
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
`;
