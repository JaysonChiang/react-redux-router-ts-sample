import { SET_FILTER, Todolist_All } from "../../action/todolistAction";

export default function filter(state: string, action: Todolist_All): string {
    
    switch (action.type) {
        case SET_FILTER:
            return action.filter;

        default:
            return state;
    }
}
