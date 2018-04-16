import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import {counter} from "./counter";
import {todolist} from "./todolist";

export const rootReducer = combineReducers({
    counter,
    routing: routerReducer,
    todolist
});


