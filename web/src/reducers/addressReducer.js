import { SAVE_ADDRESS } from "../actions/types";
import { GET_CURRENT_LOCATION } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_ADDRESS:
      return {
        ...state,
        location: action.payload
      };
    case GET_CURRENT_LOCATION:
      return {
        user_location: { lat: action.payload.lat, lng: action.payload.lng },
        ...state
      };
    default:
      return state;
  }
}
