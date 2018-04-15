// import { DECREASE_NUM, INCREASE_NUM } from "../action"
import { ADD_TODO, TODO_ACTION_ALL } from "../action";
import { ITodo } from "../entity";

export function todo(state: ITodo, action: TODO_ACTION_ALL): ITodo {
    switch (action.type) {
        case ADD_TODO:
            return {
                complete: false,
                id: action.id,
                text: action.text
            };
        default:
            return state;
    }
}

export function todos(state: ITodo[] = [{
    complete:false,
    id:0,
    text:'123',
}], action: TODO_ACTION_ALL): ITodo[] {
    switch (action.type) {
        case ADD_TODO:
            return [...state, todo(state[0], action)];
        default:
            return state;
    }
}

export function filter(state: string = "", action: TODO_ACTION_ALL): string {
    switch (action.type) {
        default:
            return state;
    }
}
