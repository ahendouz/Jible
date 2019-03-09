import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  componentDidMount = () => {
    axios
      .get("api/profile/test")
      .then(res => console.log(res))
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    return <div />;
  }
}
