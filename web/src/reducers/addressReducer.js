import { SAVE_ADDRESS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_ADDRESS:
      console.log("✅", action.payload);
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
}
