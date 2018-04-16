import createHistory from "history/createBrowserHistory";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";

import "../node_modules/normalize.css";
import App from "./App";
import "./css/index.css";
import Counter from "./ProjCounter/container/Counter";
import TodoApp from "./ProjTodolist/component/TodoApp";
import { rootReducer } from "./reducer";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// createStore(reducer, [preloadedState], [enhancer])

const store = createStore<any>(rootReducer, applyMiddleware(middleware));

store.subscribe(() => {
    const { counter, todolist } = store.getState();
    localStorage.setItem("todolist", JSON.stringify(todolist));
    localStorage.setItem("counter", JSON.stringify(counter));
});

/* tslint:disable */
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Switch>
                    <Route exact={true} path="/" component={Counter} />
                    <Route path="/todo" component={TodoApp} />
                </Switch>
            </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement
);
