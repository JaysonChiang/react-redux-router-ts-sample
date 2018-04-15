import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { counter } from "./counter/counterReducer";
import { filter, todos } from "./todolist/todolistReducer";

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
