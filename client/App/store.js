import { createStore, combineReducers } from 'redux';
import applyMiddleware from 'redux-universal';
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "../reducers";
import {config} from "../../config/config";

const middlewares = [
    promise(),
    thunk
  ];

if (config.showLog)
  middlewares.push(logger);

const createStoreWithMiddleWare = applyMiddleware(
  ...middlewares
)(createStore);

export default (initialState) => {
  const store = createStoreWithMiddleWare(combineReducers(reducers), initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = combineReducers(require('../reducers'));
      store.replaceReducer(nextReducer)
    })
  }

  return store;
}
