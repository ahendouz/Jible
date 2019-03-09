import axios from "axios";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER } from "./types";
import { GET_ERRORS } from "./types";

import { setAuthToken } from "../utils/setAuthToken";

// Register user.
export const signupUserAction = (userType, newUser) => dispatch => {
  axios
    .post(`api/users/signup/${userType}`, newUser)
    .then(res => {
      test(res, dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

const test = (res, dispatch) => {
  const { token } = res.data; // Save to localStorage.

  localStorage.setItem("jwtToken", token); // Set Token to localStorage.

  setAuthToken(token); // Set token to auth header.

  const decoded = jwt_decode(token); // Decode token to user data.

  dispatch(setCurrentUser(decoded)); // Set current user.
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Logout a user.
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken"); // Remove token from local storage.
  setAuthToken(false); // Remove auth header for future requests.
  dispatch(setCurrentUser({})); // Set current user to {} which will set isAuthenticated to false.
};
