import * as React from "react";
import { ITodo } from "../../../entity";
import ActButton from "../ActButton";
import Todo from "../Todo";

interface IProps {
    todos: ITodo[];
    onClickComplete: (id: number) => void;
    onClickDelete: (index: number) => void;
    onClickEdit: (id: number) => void;
    onChangeText: (id: number, text?: string) => void;
}

/* tslint:disable */
const Todolist = ({
    todos,
    onClickComplete,
    onClickDelete,
    onClickEdit,
    onChangeText
}: IProps) => {
    return (
        <section>
            {todos.map((todo, idx) => (
                <div key={idx} className="row">
                    <div className="col-sm-3">
                        <Todo
                            todo={todo}
                            onChangeText={onChangeText}
                            onClickComplete={() => onClickComplete(todo.id)}
                        />
                    </div>
       
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
            ))}
        </section>
    );
};
export default Todolist;
