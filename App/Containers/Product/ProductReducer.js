import * as types from '../../Actions/actionTypes';
import initialState from '../../Reducers/initialState';

export default function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;

    default:
      return state;
  }
}
