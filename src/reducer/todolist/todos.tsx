import { ADD_TODO, Todolist_All, TOGGLE_TODO } from "../../action/todolistAction";
import { ITodo } from "../../entity";
import todo from './todo'

export default function todos(state: ITodo[], action: Todolist_All): ITodo[] {
    
    switch (action.type) {
        case ADD_TODO:
            return [...state, todo({}, action)]; // TODO:should pass => todo(undefined, action)

        case TOGGLE_TODO:
            return state.map((t, i) => todo(t, action));

        default:
            return state;
    }
}