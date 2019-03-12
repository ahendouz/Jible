import axios from "axios";

export const editUserProfileAction = profileFields => dispatch => {
  axios
    .post("/api/profile/edit_profile", profileFields)
    .then(res => console.log("🚚🚚🚚🚚", res));
};
