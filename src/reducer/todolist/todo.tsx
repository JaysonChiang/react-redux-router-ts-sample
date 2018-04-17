import {
    ON_EDIT_TODO,
    Todolist_All,
    TOGGLE_TODO,
    UPDATE_TODO
} from "../../action/todolistAction";
import { ITodo } from "../../entity";

export default function todo(state: ITodo, action: Todolist_All): ITodo {
    switch (action.type) {

        case ON_EDIT_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                onEdit: !state.onEdit
            };

        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };

        case UPDATE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                text: action.text
            };

        default:
            return state;
    }
}
