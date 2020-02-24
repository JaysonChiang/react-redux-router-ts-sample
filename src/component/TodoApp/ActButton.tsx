import React from 'react';
import { ITodo } from '../../action/todolist';

interface IProps {
  actType: string;
  onClickDelete?: () => void;
  onClickEdit?: () => void;
  todo: ITodo;
}

const ActButton = ({ actType, onClickEdit, onClickDelete, todo }: IProps) => {
  switch (actType) {
    case 'delete':
      return (
        <button className="btn btn-danger" disabled={todo.completed || todo.onEdit} onClick={onClickDelete}>
          Delete
        </button>
      );
    case 'edit':
    default:
      return (
        <button
          className={todo.completed ? 'btn btn-secondary' : 'btn btn-primary'}
          disabled={todo.completed}
          onClick={onClickEdit}
        >
          {todo.onEdit ? 'Update' : 'Edit'}
        </button>
      );
  }
};

export default ActButton;
