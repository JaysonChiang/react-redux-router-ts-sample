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
      return (
        <input
          type="text"
          className="shadow-none"
          style={{ outline: 'none', border: 0 }}
          value={todo.text}
          onChange={(e) => onChangeText(todo.id, e.target.value)}
          autoFocus={item.onEdit}
        />
      );
    }
    return <span>{item.text}</span>;
  };

  return (
    <>
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onClickComplete()}
            disabled={todo.onEdit}
            id="flexCheckDefault"
          />
        </div>
      </div>

      <label
        className="form-check-label form-control"
        htmlFor="flexCheckDefault"
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {renderContent(todo)}
      </label>
    </>
  );
};

export default Todo;
