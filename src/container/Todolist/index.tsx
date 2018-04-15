import { connect, Dispatch } from "react-redux";
import * as Actions from "../../action";
import { TodolistComponent } from "../../component";
import { IStoreState } from "../../entity";


const mapStateToProps = (state: IStoreState) => ({
    todos: state.todolist.todos
 } )

export function mapDispatchToProps(
    dispatch: Dispatch<Actions.TODO_ACTION_ALL>
) {
    return {
        addTodo: (text: string) => dispatch(Actions.addTodo(text))
    };
}

export function mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
    TodolistComponent
);
