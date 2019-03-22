import React from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Navigations from "./Navigations";
import MySekhras from "./MySekhras";
import MyProfile from "./MyProfile";
import MyAddress from "./MyAddress";
import FAQ from "./FAQ";
import RequistSekhra from "./RequestSekhra";
import SekhrasTodo from "./SekhrasTodo";
import State from "./State";

const Dashboard = ({ type }) => {
  return (
    <DashboardStyle className="wrapper">
      <Navigations type={type} />
      {window.location.pathname === "/dashboard" && (
        <Redirect to="/dashboard/profile" />
      )}
      {type === "cunsumer" ? (
        <Switch>
          <Route path="/dashboard/my_sekhras" component={MySekhras} />
          <Route path="/dashboard/profile" component={MyProfile} />
          <Route path="/dashboard/my_address" component={MyAddress} />
          <Route path="/dashboard/fqa" component={FAQ} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/dashboard/sekhras_todo" component={SekhrasTodo} />
          <Route path="/dashboard/profile" component={MyProfile} />
          <Route path="/dashboard/state" component={State} />
        </Switch>
      )}
      <RequistSekhra />
    </DashboardStyle>
  );
};

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
  > div {
    font-size: 1.45rem;
  }
  > div:first-of-type {
    > a {
      display: flex;
      flex-direction: column;
      color: #090909;
      padding: 1rem 10rem 1rem 3rem;
    }
  }
  > div:nth-child(2) {
    flex: 1;
    margin: 0 9rem;
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
        padding: 0.8rem 5rem;
      }
    }
  }
`;
