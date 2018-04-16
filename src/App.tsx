import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { push } from "react-router-redux";

interface IProps {
    dispatch: Dispatch<any>;
    children: any;
}

/* tslint:disable */
const App = ({ dispatch, children }: IProps) => (
    <div>
        <nav>
            <ul>
                <li>
                    <a href="" onClick={() => dispatch(push("/"))}>
                        Go Counter
                    </a>
                </li>
                <li>
                    <a href="" onClick={() => dispatch(push("/todo"))}>
                        Go TodoApp
                    </a>
                </li>
            </ul>
        </nav>
        <section>
            {children}
        </section>
    </div>
);

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return { ...ownProps, ...stateProps, ...dispatchProps };
};

export default connect(null, null, mergeProps)(App);
