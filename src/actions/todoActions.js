import * as types from "../constants/ActionTypes";

export const addList = (data) => ({
  type: types.ADD_LIST,
  payload: data,
});

export const removeTask = (id) => ({
  type: types.REMOVE_TASK,
  payload: id,
});

export const completeTask = (data) => ({
  type: types.COMPLETE_TASK,
  payload: data,
});
