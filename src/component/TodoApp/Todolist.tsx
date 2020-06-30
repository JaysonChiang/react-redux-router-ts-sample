import React from 'react';
import { connect } from 'react-redux';
import {
  FILTERS,
  updateTodo,
  toggleTodo,
  deleteTodo,
  onEditTodo,
} from '../../action/todolist';
import { ITodo } from '../../action/todolist';
import { IStoreState } from '../../reducer';
import ActButton from './ActButton';
import Todo from './Todo';

interface IProps {
  todos: ITodo[];
  onClickComplete: (id: number) => void;
  onClickDelete: (index: number) => void;
  onClickEdit: (id: number) => void;
  onChangeText: (id: number, text?: string) => void;
}

const Todolist = ({
  todos,
  onClickComplete,
  onClickDelete,
  onClickEdit,
  onChangeText,
}: IProps) => {
  return (
    <section className="row mt-2 mb-2">
      {todos.length ? todos.map((todo, idx) => (
        <div key={idx} className="input-group mb-2">
          <Todo
            todo={todo}
            onChangeText={onChangeText}
            onClickComplete={() => onClickComplete(todo.id)}
          />
          <div className="input-group-append">
            <ActButton
              actType="edit"
              todo={todo}
              onClickEdit={() => onClickEdit(todo.id)}
            />
            <ActButton
              actType="delete"
              todo={todo}
              onClickDelete={() => onClickDelete(idx)}
            />
          </div>
        </div>
      )) : (<div>No Todos</div>)}
    </section>
  );
};

const getFiltedTodos = (todos: ITodo[], filter: string): ITodo[] => {
  const { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } = FILTERS;
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    case SHOW_ALL:
    default:
      return todos;
  }
};

const mapStateToProps = (state: IStoreState): { todos: ITodo[] } => {
  return {
    todos: getFiltedTodos(state.todolist.todos, state.todolist.filter),
  };
};

export default connect(mapStateToProps, {
  onChangeText: updateTodo,
  onClickComplete: toggleTodo,
  onClickDelete: deleteTodo,
  onClickEdit: onEditTodo,
})(Todolist);
