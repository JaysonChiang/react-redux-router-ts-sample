export const DECREASE_NUM = "DECREMENT";
export const INCREASE_NUM = "INCREMENT";


export interface IincreaseNum{
    type:string;
}

export interface IdecreaseNum{
    type:string;
}

export const increaseNum = ():IincreaseNum => {
    return { type: INCREASE_NUM};
}

export const decreaseNum = ():IdecreaseNum => {
    return { type: DECREASE_NUM };
}

export type All= IincreaseNum | IdecreaseNum;
/*
export interface ICounterActionTypes {
    increaseNum: () => void;
    decreaseNum: () => void;
  }
*/


