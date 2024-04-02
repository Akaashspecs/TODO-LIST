import * as types from "../constants/ActionTypes";

const initialState = {
  lists: [],
};

const todo = (state = initialState, action) => {
  let newState;
  let newList;
  switch (action.type) {
    case types.ADD_LIST:
      newState = [
        ...state.lists,
        {
          id: Math.random(),
          name: action.payload,
          completed: false,
        },
      ];

      return {
        ...state,
        lists: newState,
      };

    case types.REMOVE_TASK:
      newList = [...state.lists];
      const remainingItems = newList.filter((data) => {
        return data.id !== action.payload;
      });
      return {
        ...state,
        lists: remainingItems,
      };
    case types.COMPLETE_TASK:
      newList = [...state.lists];

      const isCompleted = newList.map((data) => {
        if (data.id === action.payload.id) {
          return { ...data, completed: !action.payload.completed };
        }
        return data;
      });
      return {
        ...state,
        lists: isCompleted,
      };

    default:
      return state;
  }
};

export default todo;
