// import { combineReducers } from "redux";
import { Todolist_All } from "../../action/todolistAction";
import { ITodolist } from "../../entity";
import filter from "./filter";
import iniState from './iniState'
import todos from "./todos";

export function todolist(state: ITodolist = iniState, action: Todolist_All): ITodolist {
    return {
        filter: filter(state.filter, action),
        todos: todos(state.todos, action)
    };
}
/*
const todolist = combineReducers({
    filter,
    todos
});
*/
