import {
    ADD_TODO,
    ON_EDIT_TODO,
    Todolist_All,
    TOGGLE_TODO
} from "../../action/todolistAction";
import { ITodo } from "../../entity";

export default function todo(state: ITodo, action: Todolist_All): ITodo {
    switch (action.type) {
        case ADD_TODO:
            return {
                completed: false,
                id: action.id,
                text: action.text
            };
            
        case ON_EDIT_TODO:
            if (state.id !== action.index) {
                return state;
            }
            return {
                ...state,
                onEdit: !state.onEdit
            };

        case TOGGLE_TODO:
            if (state.id !== action.index) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };

        default:
            return state;
    }
}
