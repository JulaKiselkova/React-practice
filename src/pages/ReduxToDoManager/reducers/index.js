import * as actions from "../actions";

import { v4 as uuid } from "uuid";
import { handleActions } from "redux-actions";

const initialState = {
  toDos: [],
};

const toDoManagerReducer = handleActions(
  {
    [actions.CREATE_TODO]: (state) => {
      const newTodo = {
        id: uuid(),
        toDoValue: 0,
      };
      return { toDos: [...state.toDos, newTodo] };
    },

    [actions.DELETE_TODO]: (state, { payload: id }) => {
      const copy = [...state.toDos];
      const toDoIndexToRemove = copy.findIndex((toDo) => toDo.id === id);
      copy.splice(toDoIndexToRemove, 1);
      return { toDos: copy };
    },

    [actions.COMPLETE_TODO]: (state, { payload: id }) => {
      const copy = [...state.toDos];
      const toDoIndex = copy.findIndex((toDo) => toDo.id === id);
      console.log(`${toDoIndex} is complete`);
      return { toDos: copy };
    },

    [actions.EDIT_TODO]: (state, { payload: id }) => {
      console.log("need to edit");
    },
  },
  initialState
);

export default toDoManagerReducer;

// const toDoManagerReducer = handleActions(
//   {
//     [actions.CREATE_TODO]: (state) => {
//       const newTodo = { id: uuid(), toDoValue: 0 };
//       return { toDos: [...state.todos, newTodo] };
//     },
//   },
//   initialState
// );
