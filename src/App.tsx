import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface IProps extends RouteComponentProps{
  children?: JSX.Element;
  history: History;
}

const App = ({ history, children }: IProps) => (
  <div>
    <nav className="navbar navbar-light bg-light">
      <ul className="nav">
        <li className="nav-item">
          <a href="" onClick={() => history.push('/')} className="nav-link">
            Go Counter
          </a>
        </li>
        <li className="nav-item">
          <a href="" onClick={() => history.push('/todo')} className="nav-link">
            Go TodoApp
          </a>
        </li>
      </ul>
    </nav>
    <section className="container">{children}</section>
  </div>
);

export default withRouter(App);
