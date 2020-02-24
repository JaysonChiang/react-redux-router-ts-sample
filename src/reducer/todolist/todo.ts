import { ITodolist, Action, ActionTypes } from '../../action';
import { ITodo } from '../../action/todolist';

export default function todo(state: ITodo, action: Action): ITodo {
  switch (action.type) {
    case ActionTypes.ON_EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        onEdit: !state.onEdit
      };

    case ActionTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };

    case ActionTypes.UPDATE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
}
