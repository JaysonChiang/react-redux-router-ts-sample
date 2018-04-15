import * as React from "react";
import FilterLinkSet from "../../component/FilterLinkSet";
import AddTodo from "../../container/AddTodo"
import Todolist from "../../container/Todolist";

const TodoApp = () => (
    <div>
        <AddTodo />
        <Todolist />
        <FilterLinkSet />
    </div>
)

export default TodoApp

