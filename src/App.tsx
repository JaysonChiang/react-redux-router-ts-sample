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
        <nav className="navbar navbar-light bg-light">
            <ul className="nav">
                <li className="nav-item">
                    <a href="" onClick={() => dispatch(push("/"))} className="nav-link">
                        Go Counter
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" onClick={() => dispatch(push("/todo"))} className="nav-link">
                        Go TodoApp
                    </a>
                </li>
            </ul>
        </nav>
        <section className="container">
            {children}
        </section>
    </div>
);

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    return { ...ownProps, ...stateProps, ...dispatchProps };
};

export default connect(null, null, mergeProps)(App);
