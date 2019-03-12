import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";

import { SaveLocationAction } from "../../actions/AdressActions";
import { getMap } from "../../utils/getMap";

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

  handleSubmit = e => {
    e.preventDefault();
    const { address } = this.state;
    const { SaveLocationAction } = this.props;
    const data = {
      address
    };
    SaveLocationAction(data);
  };

  render() {
    const styles = {
      width: " 100%",
      height: " 30rem",
      background: " #eee",
      border: " 1px solid #ccc"
    };
    const { address } = this.state;
    const { location } = this.props;
    return (
      <div style={styles}>
        <form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            placeholder="Please inter your address"
            name="address"
            type="text"
            value={address}
            onChange={this.handleChange}
          />
          <button type="submit">Add location</button>
        </form>
        <ul>
          <li id="map">{location.location}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ locations }) => ({
  location: locations
});

export default connect(
  mapStateToProps,
  { SaveLocationAction }
)(MyAddress);
