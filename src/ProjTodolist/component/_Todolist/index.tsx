import * as React from "react";
import { ITodo } from "../../../entity";

interface IProps {
    todos: ITodo[];
    onTodoClickComplete: (index: number) => void;
    onTodoClickEdit: (index: number) => void;
}

/* tslint:disable */
const Todolist = ({ todos, onTodoClickComplete, onTodoClickEdit }: IProps) => {
    const content = (todo: ITodo) => {
        if (todo.onEdit) {
            return (
                <span>
                    <input
                        type="text"
                        value={todo.text}
                        onChange={() => {
                            return false;
                        }}
                    />
                    <button onClick={() => onTodoClickEdit(todo.id)}>
                        Update
                    </button>
                </span>
            );
        }
        return (
            <span>
                {todo.text}
                <button
                    onClick={() => onTodoClickEdit(todo.id)}
                    disabled={todo.completed}
                >
                    Edit
                </button>
            </span>
        );
    };

    return (
        <div>
            <ul>
                {todos.map((todo, idx) => (
                    <li
                        key={idx}
                        style={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none"
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onTodoClickComplete(todo.id)}
                            disabled={todo.onEdit}
                        />
                        {content(todo)}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Todolist;
