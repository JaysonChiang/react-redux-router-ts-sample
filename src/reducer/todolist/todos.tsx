import { ADD_TODO, ON_EDIT_TODO, Todolist_All, TOGGLE_TODO } from "../../action/todolistAction";
import { ITodo } from "../../entity";
import todo from './todo'

export default function todos(state: ITodo[], action: Todolist_All): ITodo[] {
    
    switch (action.type) {
        case ADD_TODO:
            return [...state, todo(state[0], action)]; // TODO:should pass => todo(undefined, action)

        case ON_EDIT_TODO:
            return state.map((t, i) => todo(t, action));

        case TOGGLE_TODO:
            return state.map((t, i) => todo(t, action));

        default:
            return state;
    }
}