import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";

import { BtnGreenStyle } from "../../styles";
import TextFieldGroup from "../common/TextFieldGroup";

class Requistsekhra extends Component {
  state = {
    map: "",
    description: "",
    items: "",
    from: "",
    fromSearches: [],
    to: "",
    toSearches: [],
    distance: "",
    ridePrice: "",
    time: "",
    shapePoints: [],
    sekhraProcess: "Check"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    if (name === "from" && value === "") {
      this.setState({ fromSearches: [] });
    }
    if (name === "to" && value === "") {
      console.log("object");
      this.setState({ toSearches: [] });
    }
    if (name === "from" || name === "to") {
      // const [locations] = this.props;
      if (name === "from" && value !== "") {
        const searches = this.props.locations.filter(location =>
          location.includes(value)
        );
        this.setState({ fromSearches: searches });
      } else if (name === "to" && value !== "") {
        const searches = this.props.locations.filter(location =>
          location.includes(value)
        );
        this.setState({ toSearches: searches });
      }
    }
  };

  componentDidMount = () => {
    const location = [this.props.lat, this.props.lng];
    this.setState({
      map: `https://www.mapquestapi.com/staticmap/v5/map?key=iKQ5jnvoW6jeJCwdTYpIMevMRlkYgtAz&locations=${location}&size=500,500@2x`
    });
  };

  requestSekhra = sekhraDescription => {
    axios
      .post("/api/sekhra/request_sekhra", sekhraDescription)
      .then(res => {
        console.log("🍓🍓", res.data);
        const { from, to, distance, ridePrice, time } = res.data;
        this.setState({
          distance,
          ridePrice,
          time,
          sekhraProcess: "Order now",
          map: `https://open.mapquestapi.com/staticmap/v5/map?start=${from}|flag-start&end=${to}|flag-end&size=@2x&key=iKQ5jnvoW6jeJCwdTYpIMevMRlkYgtAz`,
          success: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addSekhra = sekhraDescription => {
    const {
      from,
      to,
      description,
      items,
      ridePrice,
      time: duration,
      distance
    } = this.state;
    axios
      .post("/api/sekhra/add_sekhra", {
        from,
        to,
        description,
        items,
        cost: ridePrice,
        duration,
        distance
      })
      .then(res => this.props.history.push("/"))
      .catch(err => console.log("🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼", err));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { success, sekhraProcess, description, items, from, to } = this.state;
    const sekhraDescription = {
      description,
      items,
      from,
      to
    };
    if (sekhraProcess === "Check") {
      this.requestSekhra(sekhraDescription);
    } else if (sekhraProcess === "Order now" && success) {
      this.addSekhra(sekhraDescription);
    }
  };
  handleFromField = search => {
    this.setState({ from: search, fromSearches: [] });
  };
  handleToField = search => {
    this.setState({ to: search, toSearches: [] });
  };

  hideRes = () => {
    this.setState({ fromSearches: [], toSearches: [] });
  };

  render() {
    const {
      description,
      items,
      from,
      to,
      ridePrice,
      distance,
      sekhraProcess,
      time
    } = this.state;

    return (
      <RequestsekhraStyles
        className="wrapper"
        map={this.state.map}
        onClick={() => this.hideRes()}
      >
        <h1>Request a sekhra</h1>
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
            <div className="from">
              <TextFieldGroup
                info="adress"
                name="from"
                type="text"
                value={from}
                onChange={this.handleChange}
              />
              <ul onClick={e => e.stopPropagation()}>
                {this.state.fromSearches.length > 0 &&
                  this.state.fromSearches.map(search => (
                    <li onClick={() => this.handleFromField(search)}>
                      {search}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="to">
              <TextFieldGroup
                name="to"
                type="text"
                value={to}
                onChange={this.handleChange}
              />
              <ul onClick={e => e.stopPropagation()}>
                {this.state.toSearches.length > 0 &&
                  this.state.toSearches.map(search => (
                    <li onClick={() => this.handleToField(search)}>{search}</li>
                  ))}
              </ul>
            </div>
            <BtnGreenStyle type="submit">
              {this.state.sekhraProcess}
            </BtnGreenStyle>
          </form>

          <div id="map">
            {sekhraProcess === "Order now" && (
              <div className="sekhra_info">
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
      </RequestsekhraStyles>
    );
  }
}

const mapStateToProps = ({
  locations: { user_location },
  auth: {
    user: { locations }
  }
}) => ({
  lat: user_location.lat,
  lng: user_location.lng,
  locations: locations
});
export default connect(mapStateToProps)(Requistsekhra);

const RequestsekhraStyles = styled.div`
  padding: 7rem 0;
  min-height: 70vh;
  > h1 {
    font-size: 3.2rem;
    margin-bottom: 5rem;
  }
  > div {
    @media (max-width: 900px) {
      flex-direction: column;
      form {
        order: 4;
      }
      #map {
        order: 2;
        height: 300px;
        margin: 0;
        margin-bottom: 2rem;
      }
    }
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
      position: relative;
      background: url(${props => props.map}) no-repeat center;
      background-size: cover;
      flex: 1;
      margin-left: 1rem;
      .sekhra_info {
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
    }

    .from,
    .to {
      margin-bottom: 1.7rem;
      > div {
        margin: 0;
      }
      ul {
        list-style: none;
        background: #4a90e2;
        color: white;
        li {
          padding: 1rem;
          font-size: 1.4rem;
          cursor: pointer;
          &:not(:last-of-type) {
            border-bottom: 1px solid ${props => props.theme.blueFb};
          }
        }
      }
    }
  }
`;
