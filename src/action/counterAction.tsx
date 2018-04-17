export const DECREASE_NUM = "DECREMENT";
export const INCREASE_NUM = "INCREMENT";

export interface IIncreaseNum {
    type: typeof INCREASE_NUM;
}

export interface IDecreaseNum {
    type: typeof DECREASE_NUM;
}

export const increaseNum = (): IIncreaseNum => {
    return { type: INCREASE_NUM };
};

export const decreaseNum = (): IDecreaseNum => {
    return { type: DECREASE_NUM };
};

export type Counter_All = IIncreaseNum | IDecreaseNum;