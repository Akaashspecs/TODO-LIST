import { combineReducers } from "redux";

import todo from "./todo.reducer";

const rootReducer = combineReducers({
  todo: todo,
});

export default rootReducer;
