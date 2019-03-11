import React from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";

import Navigations from "./Navigations";
import MyBags from "./MyBags";
import MyProfile from "./MyProfile";
import MyAddress from "./MyAddress";
import FAQ from "./FAQ";
import RequistBag from "./RequestBag";

const Dashboard = () => {
  return (
    <DashboardStyle className="wrapper">
      <Navigations />
      {window.location.pathname === "/dashboard" && (
        <Redirect to="/dashboard/profile" />
      )}
      <Switch>
        <Route path="/dashboard/my_bags" component={MyBags} />
        <Route path="/dashboard/profile" component={MyProfile} />
        <Route path="/dashboard/my_address" component={MyAddress} />
        <Route path="/dashboard/fqa" component={FAQ} />
      </Switch>
      <RequistBag />
    </DashboardStyle>
  );
};

export default Dashboard;

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
