import { FILTERS, SET_FILTER, Todolist_All } from "../../action/todolistAction";

const { SHOW_ALL } = FILTERS;

export default function filter(state: string = SHOW_ALL,action: Todolist_All): string {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
