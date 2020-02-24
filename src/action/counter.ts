import { ActionTypes } from './types';

export interface ICounter {
  value: number;
}

export interface IIncreaseNum {
  type: typeof ActionTypes.INCREASE_NUM;
}

export interface IDecreaseNum {
  type: typeof ActionTypes.DECREASE_NUM;
}

export const increaseNum = (): IIncreaseNum => {
  return { type: ActionTypes.INCREASE_NUM };
};

export const decreaseNum = (): IDecreaseNum => {
  return { type: ActionTypes.DECREASE_NUM };
};
