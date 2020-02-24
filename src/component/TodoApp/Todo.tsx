import React from 'react';
import { ITodo } from '../../action/todolist';

interface IProps {
  todo: ITodo;
  onClickComplete: () => void;
  onChangeText: (index: number, text?: string) => void;
}

const Todo = ({ todo, onClickComplete, onChangeText }: IProps) => {
  const renderContent = (item: ITodo): JSX.Element => {
    if (item.onEdit) {
      return <input type="text" value={todo.text} onChange={e => onChangeText(todo.id, e.target.value)} />;
    }
    return <span>{item.text}</span>;
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onClickComplete()}
        disabled={todo.onEdit}
        className="form-check-input"
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{renderContent(todo)}</span>
    </div>
  );
};

export default Todo;
