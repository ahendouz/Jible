import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";

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
  render() {
    const styles = {
      width: " 100%",
      height: " 30rem",
      background: " #eee",
      border: " 1px solid #ccc"
    };
    const { address } = this.state;
    return (
      <div style={styles}>
        <form>
          <TextFieldGroup
            placeholder="Please inter your address"
            name="address"
            type="text"
            value={address}
            onChange={this.handleChange}
          />
          <button type="submit">Add location</button>
        </form>
      </div>
    );
  }
}

export default MyAddress;
