// Counter
export interface ICounter {
    value: number;
}

// Todolist
export interface ITodo {
    id: number;
    text?: string;
    completed?: boolean;
    onEdit?:boolean;
}

export interface ITodolist {
    todos: ITodo[];
    filter: string;
}

// store
export interface IStoreState {
    counter: ICounter;
    todolist: ITodolist;
}
