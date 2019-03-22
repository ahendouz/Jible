import { SET_CURRENT_USER, ADD_LOCATION } from "../actions/types";
import { isEmpty } from "../validation/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),

        user: action.payload,
        locations: action.payload.locations
      };
    case ADD_LOCATION:
      console.log("💩", action.payload.locations);
      return {
        ...state,
        locations: action.payload
      };

    default:
      return state;
  }
}
