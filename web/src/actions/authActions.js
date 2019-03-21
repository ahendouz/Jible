import axios from "axios";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER } from "./types";
import { GET_ERRORS } from "./types";

import { setAuthToken } from "../utils/setAuthToken";

// Register user.
export const signupUserAction = (userType, newUser) => dispatch => {
  axios
    .post(`/api/users/signup/${userType}`, newUser)
    .then(res => {
      setUser(res, dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const signinUserAction = userInfo => dispatch => {
  axios
    .post("/api/users/signin", userInfo)
    .then(res => {
      setUser(res, dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Auth via facebook.
export const facebookOAuthAction = (userType, data) => dispatch => {
  axios
    .post(`/api/users/oauth/facebook/${userType}`, data)
    .then(res => {
      setUser(res, dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

const setUser = (res, dispatch) => {
  const { token } = res.data; // Save to localStorage.

  localStorage.setItem("jwtToken", token); // Set Token to localStorage.

  setAuthToken(token); // Set token to auth header.

  const decoded = jwt_decode(token); // Decode token to user data.

  setCurrentUser(decoded, dispatch); // Set current user.
};

export const setCurrentUser = (decoded, dispatch) => {
  axios
    .get(`/api/profile/user/${decoded._id}`)
    .then(res => {
      dispatch({ type: SET_CURRENT_USER, payload: res.data.user }); // Set current user.
    })
    .catch(err => dispatch({ type: SET_CURRENT_USER, payload: {} }));
};

// Logout a user.
export const logoutUser = history => dispatch => {
  history.push("/");
  localStorage.removeItem("jwtToken"); // Remove token from local storage.
  setAuthToken(false); // Remove auth header for future requests.
  dispatch({ type: SET_CURRENT_USER, payload: {} }); // Set current user to {} which will set isAuthenticated to false.
};
