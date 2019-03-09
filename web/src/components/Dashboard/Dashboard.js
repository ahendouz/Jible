import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Navigations from "./Navigations";
import MyBags from "./MyBags";
import MyProfile from "./MyProfile";
import MyAddress from "./MyAddress";
import FAQ from "./FAQ";
import RequistBag from "./RequistBag";

const Dashboard = () => {
  return (
    <DashboardStyle>
      <Navigations />
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
  > div {
    width: 33.333%;
    font-size: 1.6rem;
  }
  > div:first-of-type {
    border: 1px solid red;
    > a {
      display: flex;
      flex-direction: column;
    }
  }
  > div:nth-child(2) {
    border: 1px solid green;
  }
  > div:last-of-type {
    border: 1px solid blue;
  }
`;
