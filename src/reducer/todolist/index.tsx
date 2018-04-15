// import { combineReducers } from "redux";
import { FILTERS, Todolist_All } from "../../action/todolistAction";
import { ITodolist } from "../../entity";
import filter from "./filter";
import todos from "./todos";

const iniState = {
    filter: FILTERS.SHOW_ALL,
    todos: []
};

function todolist(state = iniState, action: Todolist_All): ITodolist {

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
export default todolist;
