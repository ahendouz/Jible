import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { visible } from "ansi-colors";

const Navigations = ({ type, isVisible }) => {
  let navigations;
  if (type === "consumer") {
    navigations = (
      <NavigationStyle isVisible={isVisible}>
        <NavLink activeClassName="active" to="/dashboard/my_sekhras">
          my sekhras
        </NavLink>
        <NavLink activeClassName="active" to="/dashboard/profile">
          my profile
        </NavLink>
        <NavLink activeClassName="active" to="/dashboard/my_address">
          my address
        </NavLink>
        <NavLink activeClassName="active" to="/dashboard/fqa">
          FAQ
        </NavLink>
      </NavigationStyle>
    );
  } else {
    navigations = (
      <NavigationStyle isVisible={isVisible}>
        <NavLink activeClassName="active" to="/dashboard/sekhras_todo">
          sekhra TODO
        </NavLink>
        <NavLink activeClassName="active" to="/dashboard/profile">
          My profile
        </NavLink>
        <NavLink activeClassName="active" to="/dashboard/fqa">
          FAQ
        </NavLink>
      </NavigationStyle>
    );
  }
  return <React.Fragment>{navigations}</React.Fragment>;
};
export default Navigations;

const NavigationStyle = styled.div`
  .active {
    color: white !important;
    padding: 1rem 10rem 1rem 3rem;
    border-radius: 5px;
    background: #419d78;
    @media (max-width: 900px) {
      color: #419d78 !important;
      background: #419d781f;
    }
    @media (max-width: 700px) {
      /* color: white !important; */
      background: white;
      border-radius: 5px;
      color: black;
    }
    @media (max-width: 700px) {
      a {
        color: white !important;
      }
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    margin-bottom: 6rem;
    text-align: center;
    justify-content: center;
    > a {
      padding: 1rem 5rem !important;
    }
  }
  @media (max-width: 700px) {
    background: #3c9e77 !important;
    position: fixed !important;
    flex-direction: column;
    width: auto;
    position: absolute;
    background: #ffffff;
    z-index: 99999;
    right: 0;
    padding: 8rem;
    height: 100%;
    top: 0;

    /* height: 100%; */
    box-shadow: 35px 25px 25px -34px #eae8e8;
    visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  }
`;
