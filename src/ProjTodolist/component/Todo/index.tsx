import * as React from "react";
import { ITodo } from "../../../entity";

interface IProps {
    todo: ITodo;
    onClickComplete: () => void;
    onChangeText: (index: number, text?: string) => void;
}

/* tslint:disable */
const Todo = ({ todo, onClickComplete, onChangeText }: IProps) => {
    const content = (t: ITodo) => {
        if (t.onEdit) {
            return (
                    <input type="text" value={todo.text} onChange={e => onChangeText(todo.id, e.target.value)}/>
            );
        }
        return <span>{t.text}</span>;
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onClickComplete}
                disabled={todo.onEdit}
                className="form-check-input"
            />
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                {content(todo)}
            </span>
        </div>
    );
};
export default Todo;
