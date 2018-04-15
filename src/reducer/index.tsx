import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import counter from "./counter";
import todolist from "./todolist";

const rootReducer = combineReducers({
    counter,
    routing: routerReducer,
    todolist
});

export default rootReducer;
