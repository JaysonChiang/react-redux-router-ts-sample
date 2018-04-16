import * as React from "react";
import { ITodo } from "../../../entity";
import EditButton from '../EditButton'
import Todo from '../Todo';

interface IProps {
    todos: ITodo[];
    onClickComplete: (index: number) => void;
    onClickEdit: (index: number) => void;
    onChangeText: (index: number, text?: string) => void;
}

/* tslint:disable */
const Todolist = ({todos, onClickComplete, onClickEdit, onChangeText}: IProps) => {

    return (
        <section>
            {todos.map((todo, idx) => (
                <div key={idx} className="row">
                    <div className="col-sm-3">
                        <Todo 
                            todo={todo} 
                            onChangeText={onChangeText} 
                            onClickComplete={() => onClickComplete(todo.id)} />
                    </div>
                    <div className="col-sm-1">
                        <EditButton 
                            todo={todo}  
                            onClickEdit={() => onClickEdit(todo.id)} />
                    </div>
                </div>
            ))}
        </section>
    );
};
export default Todolist;
