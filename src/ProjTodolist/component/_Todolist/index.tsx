import * as React from "react";
import { ITodo } from "../../../entity";

interface IProps {
    todos: ITodo[];
    onClickComplete: (index: number) => void;
    onClickEdit: (index: number) => void;
    onChangeText: (index: number, text?: string) => void;
}

/* tslint:disable */
const Todolist = ({
    todos,
    onClickComplete,
    onClickEdit,
    onChangeText
}: IProps) => {
    
    const content = (todo: ITodo) => {
        if (todo.onEdit) {
            return (
                <span>
                    <input
                        type="text"
                        value={todo.text}
                        onChange={(e) => onChangeText(todo.id, e.target.value)}
                    />
                </span>
            );
        }
        return <span>{todo.text}</span>;
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
                            onChange={() => onClickComplete(todo.id)}
                            disabled={todo.onEdit}
                        />
                        {content(todo)}
                        <button
                            onClick={() => onClickEdit(todo.id)}
                            disabled={todo.completed}
                        >
                            {todo.onEdit ? "Update" : "Edit"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Todolist;
