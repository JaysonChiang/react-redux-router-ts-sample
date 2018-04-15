import { connect, Dispatch } from "react-redux";
import * as Actions from "../../../action/todolistAction";
import { IStoreState, ITodo } from "../../../entity";
import { TodolistComponent } from "../../component";

const getFiltedTodos = (todos: ITodo[], filter: string):ITodo[] => {
    const { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } = Actions.FILTERS;
    switch (filter) {
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case SHOW_ALL:
        default:
            return todos;
    }
};

const mapStateToProps = (state: IStoreState) => {
    return {
        todos: getFiltedTodos(state.todolist.todos, state.todolist.filter)
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions.Todolist_All>) => {
    return {
        onTodoClick: (index: number) => dispatch(Actions.toggleTodo(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodolistComponent);
