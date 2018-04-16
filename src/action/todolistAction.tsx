/* action type */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';
export const ON_EDIT_TODO = 'ON_EDIT_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

/* others */
export const FILTERS = {
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
};

/* action interfaces */
export interface IAddTodo {
    id: number;
    text: string;
    type: 'ADD_TODO';
}

export interface IOnEditTodo {
    index: number;
    type: 'ON_EDIT_TODO';
}

export interface IToggleTodo {
    index: number;
    type: 'TOGGLE_TODO';
}

export interface ISetFilter {
    filter: string;
    type: 'SET_FILTER';
}

export interface IUpdateTodo {
    id: number;
    text: string;
    type: 'UPDATE_TODO';
}
/* action functions */


export const addTodo = (text: string): IAddTodo => {
    return {
        id: +(Date.now()),
        text,
        type: ADD_TODO
    };
};

export const onEditTodo = (index: number): IOnEditTodo => {
    return {
        index,
        type: ON_EDIT_TODO
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

export type Todolist_All = IAddTodo| IOnEditTodo | IToggleTodo | ISetFilter;
