import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface IProps extends RouteComponentProps {
  children?: JSX.Element;
  history: History;
}

const App = ({ history, children }: IProps) => (
  <div>
    <nav className="navbar navbar-light bg-light">
      <ul className="nav">
        <li className="nav-item">
          <a href="" onClick={() => history.push('/')} className="nav-link">
            Counter
          </a>
        </li>
        <li className="nav-item">
          <a href="" onClick={() => history.push('/todo')} className="nav-link">
            TodoApp
          </a>
        </li>
      </ul>
    </nav>
    <section className="container d-flex flex-column">
      <div className="row">{children}</div>
    </section>
  </div>
);

export default withRouter(App);
