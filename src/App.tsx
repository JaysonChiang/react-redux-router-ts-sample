import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { push } from "react-router-redux";

interface IProps {
    dispatch: Dispatch<any>;
}

/* tslint:disable */
const App = ({ dispatch }: IProps) => (
    <div>
        <ul>
            <li>
                <a href="" onClick={() => dispatch(push("/counter"))}>
                    Go Counter
                </a>
            </li>
            <li>
                <a href="" onClick={() => dispatch(push("/todoapp"))}>
                    Go TodoApp
                </a>
            </li>
        </ul>
    </div>
);

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return { ...ownProps, ...stateProps, ...dispatchProps };
};

export default connect(null, null, mergeProps)(App);
