import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Add } from "../../icons/Plus.svg";
import { addLocation } from "../../actions/profileAction";

class MyAddress extends Component {
  state = {
    address: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { address } = this.state;
    const { addLocation } = this.props;
    addLocation(address);
  };
  render() {
    const { address } = this.state;
    const { locations } = this.props;
    return (
      <MyAddresStyle>
        <form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            placeholder="Please inter your address"
            name="address"
            type="text"
            value={address}
            onChange={this.handleChange}
          />
          <button type="submit">
            <Add />
          </button>
        </form>
        <ul>
          {locations.map(location => (
            <AdressStyle
              background={`https://www.mapquestapi.com/staticmap/v5/map?key=iKQ5jnvoW6jeJCwdTYpIMevMRlkYgtAz&locations=${encodeURI(
                location
              )}|marker-sm&size=300,700@2x`}
            />
          ))}
        </ul>
      </MyAddresStyle>
    );
  }
}

const mapStateToProps = ({
  auth: {
    user: { locations }
  }
}) => ({
  locations
});

export default connect(
  mapStateToProps,
  { addLocation }
)(MyAddress);

const MyAddresStyle = styled.div`
  width: 100%;
  height: 30rem;
  form {
    display: flex;
    margin-bottom: 1.7rem;
    > div {
      width: 100%;
      margin: 0 !important;
      width: 100%;
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      padding: 1rem;
      font-family: Light;
      font-size: 1.4rem;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      background: #eaeaea;
      color: #989898;
      margin-left: 0.5rem;
      padding: 0 1.7rem;
    }
  }

  ul {
    list-style: none;
  }
`;

const AdressStyle = styled.li`
  width: 100%;
  height: 120px;
  background: url(${props => props.background}) no-repeat center;
  background-size: cover;
  margin-bottom: 1rem;
  border-radius: 4px;
`;
