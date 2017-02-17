/* eslint-disable no-param-reassign */

import { combineReducers } from 'redux';
import navReducer from '../Navigator/NavReducer';

const appReducer = combineReducers({
  navReducer,
});

const rootReducer = (state: any, action: any) => {
  // PERFORMS LOGOUT BY RESETING THE STATE
  if (action.type === 'LOG_OUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

/*

import login from '../Containers/Authentication/Login/loginReducer';
import navigation from '../Containers/Navigation/NavigationReducer';

const appReducer = combineReducers({
  login,
  navigation,
});
*/
