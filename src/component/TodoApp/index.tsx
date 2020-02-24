import React from 'react';
import AddTodo from './AddTodo';
import FilterLinkSet from './FilterLinkSet';
import Todolist from './Todolist';

const TodoApp = () => (
  <div>
    <AddTodo />
    <Todolist />
    <FilterLinkSet />
  </div>
);

export default TodoApp;
