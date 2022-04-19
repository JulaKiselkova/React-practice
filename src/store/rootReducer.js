import { combineReducers } from "redux";
import toDoManagerReducer from "../pages/ReduxToDoManager/reducers/index";

export const rootReducer = combineReducers({ toDoManager: toDoManagerReducer });
