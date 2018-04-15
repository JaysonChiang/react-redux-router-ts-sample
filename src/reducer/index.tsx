import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { counter } from "./counter";
import { filter, todos } from "./todolist";

const todolist = combineReducers({
    filter,
    todos
});

const rootReducer = combineReducers({
    counter,
    routing: routerReducer,
    todolist
});

export default rootReducer;
