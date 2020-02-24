// import { DECREASE_NUM, INCREASE_NUM } from "../action"
import { Action, ActionTypes } from '../../action';
import { ICounter } from '../../action/counter';

const iniState = {
  value: 0
};

export function counter(state: ICounter = iniState, action: Action): ICounter {
  switch (action.type) {
    case ActionTypes.INCREASE_NUM:
      return { ...state, value: state.value + 1 };

    case ActionTypes.DECREASE_NUM:
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
}
