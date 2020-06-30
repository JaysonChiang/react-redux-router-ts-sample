import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Counter from './component/Counter';
import TodoApp from './component/TodoApp';
import { rootReducer } from './reducer';
import { parseQuery } from './util';

const middlewares = [];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

store.subscribe(() => {
  const { counter, todolist } = store.getState();
  localStorage.setItem('todolist', JSON.stringify(todolist));
  localStorage.setItem('counter', JSON.stringify(counter));
});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route path="/todo" component={TodoApp} />
          <Route path="/" component={Counter} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
);
