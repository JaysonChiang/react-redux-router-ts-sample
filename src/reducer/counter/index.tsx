// import { DECREASE_NUM, INCREASE_NUM } from "../action"
import { Counter_All, DECREASE_NUM, INCREASE_NUM } from "../../action/counterAction";
import { ICounter } from "../../entity";

const initState = {
    value: 1
};

export default function counter(state: ICounter = initState, action: Counter_All): ICounter {
    switch (action.type) {
        case INCREASE_NUM:
            return { ...state, value: state.value + 1 };
        case DECREASE_NUM:
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}
