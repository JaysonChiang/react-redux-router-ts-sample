import {
    ADD_TODO,
    DELETE_TODO,
    ON_EDIT_TODO,
    Todolist_All,
    TOGGLE_TODO,
    UPDATE_TODO
} from "../../action/todolistAction";
import { ITodo } from "../../entity";
import todo from "./todo";

export default function todos(state: ITodo[], action: Todolist_All): ITodo[] {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    completed: false,
                    id: action.id,
                    text: action.text
                }
            ];

        case DELETE_TODO:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

        case ON_EDIT_TODO:
            return state.map((t, i) => todo(t, action));

        case TOGGLE_TODO:
            return state.map((t, i) => todo(t, action));

        case UPDATE_TODO:
            return state.map((t, i) => todo(t, action));

        default:
            return state;
    }
}
