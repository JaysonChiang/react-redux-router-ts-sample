import { ITodolist, Action, ActionTypes } from '../../action';
import { ITodo } from '../../action/todolist';
import todo from './todo';

export default function todos(state: ITodo[], action: Action): ITodo[] {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          id: action.id,
          text: action.text
        }
      ];

    case ActionTypes.DELETE_TODO:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];

    case ActionTypes.ON_EDIT_TODO:
      return state.map((t, i) => todo(t, action));

    case ActionTypes.TOGGLE_TODO:
      return state.map((t, i) => todo(t, action));

    case ActionTypes.UPDATE_TODO:
      return state.map((t, i) => todo(t, action));

    default:
      return state;
  }
}
