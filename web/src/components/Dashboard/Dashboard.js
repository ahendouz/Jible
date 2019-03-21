import React from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "styled-icons/boxicons-regular/Menu";
import { Close } from "styled-icons/material/Close";
// import { Bell } from "styled-icons/boxicons-regular/Bell";

import Navigations from "./Navigations";
import MySekhras from "./MySekhras";
import MyProfile from "./MyProfile";
import MyAddress from "./MyAddress";
import FAQ from "./FAQ";
import Requistsekhra from "./RequestSekhra";
import sekhrasTodo from "./SekhrasTodo";

class Dashboard extends React.Component {
  state = {
    isNavOpened: false
  };
  handleClose = () => {
    console.log("yes");
    this.setState({ isNavOpened: !this.state.isNavOpened });
  };
  render() {
    const { type } = this.props;
    return (
      <DashboardStyle className="wrapper">
        {this.state.isNavOpened ? (
          <Close onClick={this.handleClose} />
        ) : (
          <Menu onClick={this.handleClose} />
        )}
        <div>
          <Navigations type={type} isVisible={this.state.isNavOpened} />
          {window.location.pathname === "/dashboard" && (
            <Redirect to="/dashboard/profile" />
          )}
          <Switch>
            <Route path="/dashboard/my_sekhras" component={MySekhras} />
            <Route path="/dashboard/profile" component={MyProfile} />
            <Route path="/dashboard/my_address" component={MyAddress} />
            <Route path="/dashboard/fqa" component={FAQ} />
            <Route path="/dashboard/sekhras_todo" component={sekhrasTodo} />
          </Switch>
          <Requistsekhra type={type} />
        </div>
      </DashboardStyle>
    );
  }
}

const mapStateToProps = ({
  auth: {
    user: { type }
  }
}) => ({
  type
});

export default connect(mapStateToProps)(Dashboard);

const DashboardStyle = styled.div`
  display: flex;
  min-height: 70vh;
  align-items: start;
  padding: 7rem 0;
  justify-content: space-between;
  > svg {
    width: 2rem;
    width: 2rem;
    position: absolute;
    z-index: 999999;
    top: 6%;
    right: 4%;
    display: none;

    @media (max-width: 700px) {
      width: 2rem;
      position: absolute;
      top: 6%;
      right: 4%;
      display: block;
    }
  }
  > div {
    display: flex;
    min-height: 70vh;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 900px) {
      flex-wrap: wrap;
    }

    > div {
      font-size: 1.45rem;
    }
    > div:first-of-type {
      > a {
        display: flex;
        flex-direction: column;
        padding: 1rem 10rem 1rem 3rem;
      }
    }
    > div:nth-child(2) {
      flex: 1;
      margin: 0 9rem;
      @media (max-width: 600px) {
        margin: 0 1rem;
      }
    }
    > div:last-of-type {
    }
    .dashboard_edit-profile {
      .user_info {
        display: flex;
        margin-bottom: 4rem;
        .user_avatar {
          width: 30px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 1rem;
          img {
            width: 100%;
            vertical-align: top;
          }
        }
      }
      form {
        display: flex;
        flex-direction: column;

        button {
          align-self: flex-end;
          margin-top: 3rem;

          @media (max-width: 700px) {
            margin: 0 auto;
            padding: 1rem 3rem;
          }
        }
      }
    }
  }
`;
