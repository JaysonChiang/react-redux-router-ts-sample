/* action type */
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_FILTER = "SET_FILTER"
export const ON_EDIT_TODO = "ON_EDIT_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

/* others */
export const FILTERS = {
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED"
};

/* action interfaces */
export interface IAddTodo {
    id: number
    text: string
    type: typeof ADD_TODO;
}

export interface IDeleteTodo {
    index: number
    type: typeof DELETE_TODO
}

export interface IOnEditTodo {
    id: number
    type: typeof ON_EDIT_TODO
}

export interface IToggleTodo {
    id: number
    type: typeof TOGGLE_TODO
}

export interface ISetFilter {
    filter: string
    type: typeof SET_FILTER
}

export interface IUpdateTodo {
    id: number;
    text: string;
    type: typeof UPDATE_TODO
}

/* action creatore  */
export const addTodo = (text: string): IAddTodo => {
    return {
        id: +Date.now(),
        text,
        type: ADD_TODO
    };
};

export const deleteTodo = (index: number): IDeleteTodo =>{
    return {
        index,
        type: DELETE_TODO
    }
}

export const onEditTodo = (id: number): IOnEditTodo => {
    return {
        id,
        type: ON_EDIT_TODO
    };
};

export const toggleTodo = (id: number): IToggleTodo => {
    return {
        id,
        type: TOGGLE_TODO
    };
};

export const setFilter = (filter: string): ISetFilter => {
    return {
        filter,
        type: SET_FILTER
    };
};

export const updateTodo = (id: number, text: string): IUpdateTodo => {
    return {
        id,
        text,
        type: UPDATE_TODO
    };
};

export type Todolist_All =
    | IAddTodo
    | IDeleteTodo
    | IOnEditTodo
    | IToggleTodo
    | ISetFilter
    | IUpdateTodo;
