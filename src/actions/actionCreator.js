import {
  ADD_USER,
  REMOVE_USER,
  SET_VISIBILITY_FILTER
} from "./actionsTypes";

let userId = 1;

export const addUser = userData => ({
  type: ADD_USER,
  id: userId++,
  userData
});

export const removeUser = id => ({
  type: REMOVE_USER,
  id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
