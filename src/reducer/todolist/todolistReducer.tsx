// import { DECREASE_NUM, INCREASE_NUM } from "../action"
import { ITodo } from "../../entity";
import { ADD_TODO, Todolist_All } from "./todolistAction";

export function todo(state: ITodo, action: Todolist_All): ITodo {
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

export function todos(state: ITodo[] = [], action: Todolist_All): ITodo[] {
    switch (action.type) {
        case ADD_TODO:
            return [...state, todo(state[0], action)];
        default:
            return state;
    }
}

export function filter(state: string = "", action: Todolist_All): string {
    switch (action.type) {
        default:
            return state;
    }
}
