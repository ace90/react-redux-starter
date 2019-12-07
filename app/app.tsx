import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers} from 'redux'
import { Route, Switch } from 'react-router';
import SampleContainer from "./containers/SampleContainer";
import AboutContainer from "./containers/AboutContainer";
import {createBrowserHistory, History} from 'history';
import { AppContainer } from 'react-hot-loader'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import todoReducer from './reducers/todoreducers';

const onSamplePage = () => {

};

const routes = (
    <div>      
      <Switch>
        <Route exact path="/" component={SampleContainer} onEnter={onSamplePage} />
        <Route exact path="/about" component={AboutContainer} />
      </Switch>
    </div>
  )

interface AppProps {
    history: History;
  }
  
  const App = ({ history }: AppProps) => {
    return (
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    )
  }

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    todo: todoReducer
})

const history = createBrowserHistory();

function configureStore(preloadedState?: any) {
    const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
      createRootReducer(history),
      preloadedState,
      composeEnhancer(
        applyMiddleware(
          routerMiddleware(history),
        ),
      ),
    )
  
    // Hot reloading
    // if (module.hot) {
    //   // Enable Webpack hot module replacement for reducers
    //   module.hot.accept('./reducers', () => {
    //     store.replaceReducer(createRootReducer(history));
    //   });
    // }
  
    return store
}

const store = configureStore()
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()
