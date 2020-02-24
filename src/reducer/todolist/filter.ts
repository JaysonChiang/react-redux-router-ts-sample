import { Action, ActionTypes } from '../../action';

export default function filter(state: string, action: Action): string {
  switch (action.type) {
    case ActionTypes.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}
