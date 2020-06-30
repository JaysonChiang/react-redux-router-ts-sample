import React from 'react';
import AddTodo from './AddTodo';
import FilterLinkSet from './FilterLinkSet';
import Todolist from './Todolist';

const TodoApp = () => (
  <>
  <div className="col-lg-5 col-md-12 col-sm-12 pt-16 pt-lg-6">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Todo App</h1>
        <p className="lead">
          This is simple todo app, build with React/Redux and TypeScript.
        </p>
      </div>
    </div>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12">
      <AddTodo />
      <FilterLinkSet />
      <Todolist />
    </div>
</>
);

export default TodoApp;
