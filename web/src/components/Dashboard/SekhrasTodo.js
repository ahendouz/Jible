import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import { button } from "../../styles/Button";

class sekhrasTodo extends Component {
  state = {
    sekhrasTodo: []
  };

  componentDidMount = async () => {
    let sekhrasTodo = await axios.get("/api/sekhra/sekhras_todo");
    // sekhrasTodo = sekhrasTodo.data.map(sekhra => console.log(sekhra));
    sekhrasTodo = sekhrasTodo.data.filter(s => s.status !== "delivered");
    this.setState({ sekhrasTodo: sekhrasTodo });
    const { lat, lng } = this.props.user_location;
    // const { sekhrasTodo } = this.state;
    this.state.sekhrasTodo.map(mySekhra => {
      window.L.mapquest.key = "iKQ5jnvoW6jeJCwdTYpIMevMRlkYgtAz";
      // 'map' refers to a <div> element with the ID map
      window.L.mapquest.map(`${mySekhra._id}`, {
        center: [33.9955876, -6.849696100000001],
        layers: window.L.mapquest.tileLayer("map"),
        zoom: 12
      });
      window.L.mapquest.directions().route({
        start: mySekhra.from,
        end: mySekhra.to,
        waypoints: [lat, lng]
      });
    });
  };

  handleSekhraStatus = async sekhraID => {
    if (window.confirm("Yes it delevered")) {
      const changeStatus = await axios.post("/api/sekhra/sekhras_status", {
        sekhraID
      });
    }
  };

  render() {
    const { sekhrasTodo } = this.state;
    return (
      <SekhrasTodoStyle>
        {sekhrasTodo.length > 0 ? (
          this.state.sekhrasTodo.map((sekhra, i) => (
            <div style={{ marginBottom: "3.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.6rem"
                }}
              >
                <h1>{`sekhra ${i + 1}`}</h1>
                <BtnGrayStyle
                  onClick={() => this.handleSekhraStatus(sekhra._id)}
                >
                  delivered
                </BtnGrayStyle>
              </div>
              <div
                id={`${sekhra._id}`}
                style={{ width: "100%", height: "45vh" }}
              />
              <div className="sekhra_info">
                <div>
                  <div className="description">{sekhra.description}</div>
                  <ul className="items">
                    {sekhra.items.map(item => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="owner">
                  <div>
                    <img src={sekhra.owner.avatar} alt="owner" />
                  </div>
                  <div>
                    <p>{sekhra.owner.name}</p> <p>{sekhra.owner.phoneNumber}</p>
                  </div>
                </div>
              </div>
              <div className="sekhra_info_2">
                <div>
                  <p>Estimated Price</p>
                  <p>{sekhra.cost}</p>
                </div>
                <div>
                  <p>Estimated time and distance</p>
                  <p className="distance">{`${sekhra.distance}km`}</p>{" "}
                  <span>/</span>
                  <p className="time">{sekhra.duration}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No sekhra assigned to you yet.</div>
        )}
      </SekhrasTodoStyle>
    );
  }
}

const mapStateToProps = ({ locations: { user_location } }) => ({
  user_location
});

export default connect(mapStateToProps)(sekhrasTodo);

const BtnGrayStyle = styled(button)`
  color: white;
  background: ${props => props.theme.gray_2} !important;
`;

const SekhrasTodoStyle = styled.div`
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
    .owner {
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
