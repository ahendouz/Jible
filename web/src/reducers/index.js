import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import addressReducer from "./addressReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  locations: addressReducer,
  errors: errorReducer
});
