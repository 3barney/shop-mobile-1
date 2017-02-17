/* eslint-disable no-case-declarations */
import { NavigationExperimental } from 'react-native';
import * as types from '../Actions/actionTypes';

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
    key: 'home',
    title: 'Welcome Home',
  }],
};

function navigationState(state = initialState, action) {
  switch (action.type) {
    case types.PUSH_ROUTE:
      if (state.routes[state.index].key === (action.route && action.route.key)) return state;
      // ensure no duplicate keys
      const index = state.routes.findIndex((route) => {
        return action.route.key === route.key && action.route.title === route.title;
      });
      if (index > -1) {
        const clonedState = Object.assign({}, state);
        clonedState.routes.splice(index, 1);
        return NavigationStateUtils.push(clonedState, action.route);
      }
      return NavigationStateUtils.push(state, action.route);
    case types.POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1) return state;
      return NavigationStateUtils.pop(state);
    default:
      return state;
  }
}
/*
case PUSH_ROUTE:{

     // trying to push the route where we already are, no need to change a thing
         if (state.routes[state.index].key === (action.route && action.route.key))
            return state;
     // ensure no duplicate keys
         const index = state.routes.findIndex((route) => {
         return action.route.key === route.key && action.route.title ===route.title;
        });
         if (index > -1) {
                  const clonedState = Object.assign({}, state);
                  clonedState.routes.splice(index, 1);
                  return NavigationStateUtils.push(clonedState, action.route);
                  }
      // normal case for a push
            return NavigationStateUtils.push(state, action.route);
*/

export default navigationState;
