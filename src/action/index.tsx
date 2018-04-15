export const DECREASE_NUM = "DECREMENT";
export const INCREASE_NUM = "INCREMENT";

export interface IIncreaseNum {
    type: string;
}

export interface IDecreaseNum {
    type: string;
}

export const increaseNum = (): IIncreaseNum => {
    return { type: INCREASE_NUM };
};

export const decreaseNum = (): IDecreaseNum => {
    return { type: DECREASE_NUM };
};

export type All = IIncreaseNum | IDecreaseNum;
/*
export interface ICounterActionTypes {
    increaseNum: () => void;
    decreaseNum: () => void;
  }
*/

export const ADD_TODO = "ADD_TODO";

export interface IAddTodo {
    id: number;
    text: string;
    type: string;
}

export const addTodo = (text: string): IAddTodo => {
    return {
        id: 0,
        text,
        type: ADD_TODO,
    };
};
export type TODO_ACTION_ALL = IAddTodo;
