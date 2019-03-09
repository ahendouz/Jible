import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
