import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { Bell } from "styled-icons/boxicons-regular/Bell";
import { BtnGreenStyle } from "../../styles";
import axios from "axios";
import styled from "styled-components";
import { button } from "../../styles/Button";

class NavbarAuth extends Component {
  state = {
    isConnected: true
  };
  componentDidMount = async () => {
    const { type } = this.props.user;
    if (type === "rider") {
      const riderState = await axios.get("/api/profile/get_status");
      this.setState({ isConnected: riderState.data });
    }
  };

  handleClick = async () => {
    const riderState = !this.state.isConnected;
    const changeRiderState = await axios.post("/api/profile/change_status", {
      status: riderState
    });
    this.setState({ isConnected: riderState });
  };
  render() {
    const {
      user: { name, avatar },
      logoutUser,
      history
    } = this.props;
    return (
      <div className="navbar_authorized">
        <Bell />
        <div>
          <img src={avatar} alt="user profile avatar" />
        </div>
        <p>
          {name}
          <div className="dropDown">
            {this.props.user.type === "rider" && (
              <BtnStateStyle
                onClick={this.handleClick}
                state={this.state.isConnected}
              >
                {this.state.isConnected ? "Connected" : "Disconnected"}
              </BtnStateStyle>
            )}
            <BtnGreenStyle onClick={() => logoutUser(history)}>
              Sign out
            </BtnGreenStyle>
          </div>
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(withRouter(NavbarAuth));

const BtnStateStyle = styled(button)`
  color: white;
  background: ${props =>
    props.state ? props.theme.green : props.theme.gray_2} !important;
`;
