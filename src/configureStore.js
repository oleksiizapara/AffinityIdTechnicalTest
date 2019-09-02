import axios from 'axios';
import { createLogicMiddleware } from 'redux-logic';
import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import logic from './rootLogic';

const deps = {
  httpClient: axios,
  baseApiAddress:
    'https://my-json-server.typicode.com/oleksiizapara/AffinityIdTechnicalTestApi'
};

const logicMiddleware = createLogicMiddleware(logic, deps);
const loggerMiddleware = createLogger();

const middleware = applyMiddleware(logicMiddleware, loggerMiddleware);

// using compose to allow for applyMiddleware, just add it in
const enhancer =
  typeof devToolsExtension !== 'undefined' &&
  process.env.NODE_ENV === 'development'
    ? compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : middleware;

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  return store;
}
