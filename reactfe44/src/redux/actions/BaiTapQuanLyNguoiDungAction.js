import * as actionTypes from "./actionTypes";

export const addUser = (user) => ({
  type: actionTypes.ADD_USER,
  user
});

export const editUser = (user) => ({
  type: actionTypes.EDIT_USER,
  user
});

export const saveUser = (user) => ({
  type: actionTypes.SAVE_USER,
  user
});
