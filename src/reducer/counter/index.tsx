// import { DECREASE_NUM, INCREASE_NUM } from "../action"
import { Counter_All, DECREASE_NUM, INCREASE_NUM } from "../../action/counterAction";
import { ICounter } from "../../entity";
import iniState from "./iniState";

export function counter(state: ICounter = iniState,action: Counter_All): ICounter {
    switch (action.type) {
        case INCREASE_NUM:
            return { ...state, value: state.value + 1 };

        case DECREASE_NUM:
            return { ...state, value: state.value - 1 };

        default:
            return state;
    }
}
