// import { DECREASE_NUM, INCREASE_NUM } from "../action"
import { combineReducers } from "redux";
import filter from './filter'
import todos from './todos'

const todolist = combineReducers({
    filter,
    todos
});

export default todolist;

