import { connect, Dispatch } from "react-redux";
import * as Actions from "../../../action/todolistAction";
import { IStoreState } from "../../../entity";
import { FilterLinkComponent } from "../../component";

interface IProps {
    filter: string;
}

const mapStateToProps = (state: IStoreState, ownProps: IProps) => {
    return {
        active: ownProps.filter === state.todolist.filter
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions.Todolist_All>, ownProps: IProps) => {
    return {
        onClick: () => {
            dispatch(Actions.setFilter(ownProps.filter));
        }
    };
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
    FilterLinkComponent
);
