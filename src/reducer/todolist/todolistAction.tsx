export const ADD_TODO = "ADD_TODO";

export interface IAddTodo {
    id: number;
    text: string;
    type: string;
}

export const addTodo = (text: string): IAddTodo => {
    return {
        id: 0,
        text,
        type: ADD_TODO,
    };
};
export type Todolist_All = IAddTodo;
