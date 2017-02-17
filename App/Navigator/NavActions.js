import * as types from '../Actions/actionTypes';

export function push(route) {
  return {
    type: types.PUSH_ROUTE,
    route,
  };
}

export function pop() {
  return {
    type: types.POP_ROUTE,
  };
}

export function changeTab(index) {
  return {
    type: types.CHANGE_TAB,
    index,
  };
}
