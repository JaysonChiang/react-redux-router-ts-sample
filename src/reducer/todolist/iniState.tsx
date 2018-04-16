import { FILTERS } from "../../action/todolistAction";

const dataLocalStorage = JSON.parse(localStorage.getItem("todolist") as string);

const iniState =  dataLocalStorage || {
    filter: FILTERS.SHOW_ALL,
    todos: []
};

export default iniState;
