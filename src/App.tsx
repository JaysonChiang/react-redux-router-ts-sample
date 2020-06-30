import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  children?: JSX.Element;
}

const App = ({ children }: IProps) => (
  <div>
    <nav className="navbar navbar-light bg-light">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Counter
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/todo" className="nav-link">
            TodoApp
          </Link>
        </li>
      </ul>
    </nav>
    <section className="container d-flex flex-column">
      <div className="row">{children}</div>
    </section>
  </div>
);

export default App;
