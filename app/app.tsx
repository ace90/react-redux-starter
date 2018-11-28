import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
// deprecated
// import {routerReducer, syncHistoryWithStore} from 'react-router-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import {applyMiddleware} from 'redux';
import {combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import SampleContainer from "./containers/SampleContainer";
import AboutContainer from "./containers/AboutContainer";
//ReactDOM.render(<GitLogger/>, document.getElementById('root'));

const store = createStore(
    applyMiddleware(thunkMiddleware)
);

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <Router>
            <div>
                <Route exact path="/" component={SampleContainer}/>
                <Route path={"/about.php"} component={AboutContainer}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)
