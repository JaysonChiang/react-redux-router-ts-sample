import * as React from "react";
import { ITodo } from "../../../entity";

export interface IProps {
    todos: ITodo[];
}

const Todolist  = ({ todos }:IProps) =>(
    <div>
    <ul>
        {todos.map((item, idx) => <li key={idx}>{item.text}</li>)}
    </ul>
</div>
)
export default Todolist;

