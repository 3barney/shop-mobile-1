// @flow
/* eslint-disable global-require */
import {AsyncStorage} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import {persistStore, autoRehydrate} from 'redux-persist';
import rootReducer from '../Reducers/index';

export default function configureStore(): any {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk),
      autoRehydrate()
    ),
  );

  if (module.hot) {
    module.hot.accept(() => {   // Enable hot module replacement for reducers
      const nextRootReducer = require('../Reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  persistStore(store, {storage: AsyncStorage});
  return store;
}
