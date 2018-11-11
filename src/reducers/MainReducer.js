import { combineReducers } from "redux";
import users from "./UserReducer";
import visibilityFilter from "./FilterReducer";

export default combineReducers({
  users,
  visibilityFilter
});
