import * as React from "react";
import { ITodo } from "../../entity";

export interface IProps {
    todos: ITodo[];
}
export default class Counter extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { todos } = this.props;

        return (
            <div>
                <ul>
                    {todos.map((item, idx) => <li key={idx}>{item.text}</li>)}
                </ul>
            </div>
        );
    }
}
