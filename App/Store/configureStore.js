// @flow
/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from '../Reducers/index';

export default function configureStore(): any {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );

  if (module.hot) {
    module.hot.accept(() => {   // Enable hot module replacement for reducers
      const nextRootReducer = require('../Reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
