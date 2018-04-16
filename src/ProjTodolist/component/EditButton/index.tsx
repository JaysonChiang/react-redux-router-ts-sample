import * as React from "react";
import { ITodo } from "../../../entity";

interface IProps {
    onClickEdit: () => void;
    todo: ITodo;
}

const EditButton = ({ todo, onClickEdit }: IProps) => (
    <button
        onClick={onClickEdit}
        disabled={todo.completed}
        className={todo.completed ? "btn btn-secondary" : "btn btn-primary"}
    >
        {todo.onEdit ? "Update" : "Edit"}
    </button>
);

export default EditButton;
