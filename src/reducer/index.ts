import { combineReducers } from 'redux';
import { counter } from './counter';
import { todolist } from './todolist';
import { ICounter } from '../action/counter';
import { ITodolist } from '../action/todolist';

export interface IStoreState {
  counter: ICounter;
  todolist: ITodolist;
}

export const rootReducer = combineReducers<IStoreState>({
  counter,
  todolist
});
