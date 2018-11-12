import {
  ADD_USER,
  REMOVE_USER,
  SET_VISIBILITY_FILTER
} from "./actionsTypes";

let userId = 1;

//action for adding new user new id is created and user data(json) is sent along with it
export const addUser = userData => ({
  type: ADD_USER,
  id: userId++,
  userData
});

//action for removing user data from the store. Id is sent as input for filtering
export const removeUser = id => ({
  type: REMOVE_USER,
  id
});

//Filter to display all the store content. Can be used to add complex filters also.
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
