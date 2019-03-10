import React, { Component } from "react";
import axios from "axios";

import { BtnGreenStyle } from "../../styles";
import TextFieldGroup from "../common/TextFieldGroup";

class RequistBag extends Component {
  state = {
    description: "",
    items: "",
    from: "",
    to: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { description, items, from, to } = this.state;
    const bagDescription = {
      description,
      items,
      from,
      to
    };

    axios.post("api/request/request_bag", bagDescription).then(res => {
      // TODO Redirct to my bugs
    });
  };
  render() {
    const { description, items, from, to } = this.state;
    return (
      <div>
        <h1>Request a bag</h1>
        <form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            placeholder="Text here"
            name="description"
            type="text"
            value={description}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            placeholder="Item"
            name="items"
            type="text"
            value={items}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            placeholder="From"
            name="from"
            type="text"
            value={from}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            placeholder="to"
            name="to"
            type="text"
            value={to}
            onChange={this.handleChange}
          />
          <BtnGreenStyle type="submit">Order now</BtnGreenStyle>
        </form>
      </div>
    );
  }
}
export default RequistBag;
