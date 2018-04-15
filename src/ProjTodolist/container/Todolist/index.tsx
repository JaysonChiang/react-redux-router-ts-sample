import { connect, Dispatch } from "react-redux";
import { IStoreState } from "../../../entity";
import * as Actions from "../../../reducer/todolist/todolistAction";
import { TodolistComponent } from "../../component";

const mapStateToProps = (state: IStoreState) => {
    return {
        todos: state.todolist.todos
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions.Todolist_All>) => {
    return {
        addTodo: (text: string) => dispatch(Actions.addTodo(text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodolistComponent);
