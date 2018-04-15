import * as React from "react";
import { connect, Dispatch } from "react-redux";
import * as Actions from "../../../reducer/todolist/todolistAction";

interface IProps {
    dispatch: Dispatch<Actions.Todolist_All>;
}

class AddTodo extends React.Component<IProps, {}> {
    private input: HTMLInputElement;

    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { dispatch } = this.props;

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const text = this.input.value;

            if (text.trim().length > 0) {
                dispatch(Actions.addTodo(text.trim()));
                this.input.value = ""; // reset value
            }
        };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        ref={(input: HTMLInputElement) => (this.input = input)}
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

export function mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(null, null, mergeProps)(AddTodo);
