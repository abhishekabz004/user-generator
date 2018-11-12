import { combineReducers } from "redux";
import users from "./UserReducer";
import visibilityFilter from "./FilterReducer";

//Combines all the reducers defined. Mandatory in Redux framework
export default combineReducers({
  users,
  visibilityFilter
});
