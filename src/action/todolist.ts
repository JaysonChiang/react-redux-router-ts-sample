import { ActionTypes } from './types';

// Todolist
export interface ITodo {
  id: number;
  text?: string;
  completed?: boolean;
  onEdit?: boolean;
}

export interface ITodolist {
  todos: ITodo[];
  filter: string;
}

/* others */
export const FILTERS = {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
};

/* action interfaces */
export interface IAddTodo {
  id: number;
  text: string;
  type: typeof ActionTypes.ADD_TODO;
}

export interface IDeleteTodo {
  index: number;
  type: typeof ActionTypes.DELETE_TODO;
}

export interface IOnEditTodo {
  id: number;
  type: typeof ActionTypes.ON_EDIT_TODO;
}

export interface IToggleTodo {
  id: number;
  type: typeof ActionTypes.TOGGLE_TODO;
}

export interface ISetFilter {
  filter: string;
  type: typeof ActionTypes.SET_FILTER;
}

export interface IUpdateTodo {
  id: number;
  text: string;
  type: typeof ActionTypes.UPDATE_TODO;
}

/* action creatore  */
export const addTodo = (text: string): IAddTodo => {
  return {
    id: +Date.now(),
    text,
    type: ActionTypes.ADD_TODO
  };
};

export const deleteTodo = (index: number): IDeleteTodo => {
  return {
    index,
    type: ActionTypes.DELETE_TODO
  };
};

export const onEditTodo = (id: number): IOnEditTodo => {
  return {
    id,
    type: ActionTypes.ON_EDIT_TODO
  };
};

export const toggleTodo = (id: number): IToggleTodo => {
  return {
    id,
    type: ActionTypes.TOGGLE_TODO
  };
};

export const setFilter = (filter: string): ISetFilter => {
  return {
    filter,
    type: ActionTypes.SET_FILTER
  };
};

export const updateTodo = (id: number, text: string): IUpdateTodo => {
  return {
    id,
    text,
    type: ActionTypes.UPDATE_TODO
  };
};
