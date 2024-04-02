import { createSelector } from "reselect";

const todoSelector = (state) => state.todo;

export const todoSelectorData = createSelector(todoSelector, (data) => {
  if (data) {
    return data.lists;
  }
  return [];
});
