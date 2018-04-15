// import { DECREASE_NUM, INCREASE_NUM } from "../action"
import { ICounter } from "../../entity";
import { Counter_All, DECREASE_NUM, INCREASE_NUM } from "./counterAction";

const initState = {
    value: 1
};

export function counter(state: ICounter = initState, action: Counter_All): ICounter {
    switch (action.type) {
        case INCREASE_NUM:
            return { ...state, value: state.value + 1 };
        case DECREASE_NUM:
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}
