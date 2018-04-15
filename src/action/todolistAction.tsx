/* action type */
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGOLE_TODO";
export const SET_FILTER = "SET_FILTER";

/* others */
export const FILTERS = {
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
};

/* action interfaces */
export interface IAddTodo {
    id: number;
    text: string;
    type: "ADD_TODO";
}

export interface IToggleTodo {
    index: number;
    type: "TOGGOLE_TODO";
}

export interface ISetFilter {
    filter: string;
    type: "SET_FILTER";
}

/* action functions */
let nextTodoId = 0;

export const addTodo = (text: string): IAddTodo => {
    return {
        id: nextTodoId++,
        text,
        type: ADD_TODO
    };
};

export const toggleTodo = (index: number): IToggleTodo => {
    return {
        index,
        type: TOGGLE_TODO
    };
};

export const setFilter = (filter: string): ISetFilter => {
    return {
        filter,
        type: SET_FILTER
    };
};

export type Todolist_All = IAddTodo | IToggleTodo | ISetFilter;
