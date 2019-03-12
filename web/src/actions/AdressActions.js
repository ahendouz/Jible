import axios from "axios";
import { SAVE_ADDRESS } from "./types";

export const SaveLocationAction = data => dispatch => {
  axios
    .post("/api/location/save_address", data)
    .then(res =>
      dispatch({
        type: SAVE_ADDRESS,
        payload: res.data.address
      })
    )
    .catch(err => console.log("💩", err));
};
