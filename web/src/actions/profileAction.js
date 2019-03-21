import axios from "axios";
import { ADD_LOCATION } from "./types";

export const editUserProfileAction = profileFields => dispatch => {
  axios
    .post("/api/profile/edit_profile", profileFields)
    .then(res => console.log("🚚🚚🚚🚚", res));
};
export const addLocation = address => async dispatch => {
  axios
    .post("/api/profile/add_location", {
      address
    })
    .then(res =>
      dispatch({
        type: ADD_LOCATION,
        payload: res.data
      })
    );
};
