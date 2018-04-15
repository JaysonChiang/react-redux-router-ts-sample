// import { DECREASE_NUM, INCREASE_NUM } from "../action"
import { All, DECREASE_NUM, INCREASE_NUM } from "../action";
import { ICounter } from "../entity";

const initState = {
    value: 1
};

export function counter(state: ICounter = initState, action: All): ICounter {
    switch (action.type) {
        case INCREASE_NUM:
            return { ...state, value: state.value + 1 };
        case DECREASE_NUM:
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}
