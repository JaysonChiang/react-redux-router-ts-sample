import * as React from "react";
import { ITodo } from "../../../entity";

interface IProps {
    todos: ITodo[];
    onTodoClick: (index: number) => void;
}

/* tslint:disable */
const Todolist = ({ todos, onTodoClick }: IProps) => (
    <div>
        <ul>
            {todos.map((todo, idx) => (
                <li
                    key={idx}
                    onClick={() => onTodoClick(idx)}
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none"
                    }}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    </div>
);
export default Todolist;
