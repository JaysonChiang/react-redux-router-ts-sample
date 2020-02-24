import { IIncreaseNum, IDecreaseNum } from './counter';
import { IAddTodo, IDeleteTodo, IOnEditTodo, IToggleTodo, ISetFilter, IUpdateTodo } from './todolist';
export enum ActionTypes {
  DECREASE_NUM,
  INCREASE_NUM,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  ON_EDIT_TODO,
  UPDATE_TODO
}

export type Action =
  | IIncreaseNum
  | IDecreaseNum
  | IAddTodo
  | IDeleteTodo
  | IOnEditTodo
  | IToggleTodo
  | ISetFilter
  | IUpdateTodo;
