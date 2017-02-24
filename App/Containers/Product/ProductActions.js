/* eslint-disable */
import * as types from '../../Actions/actionTypes';
import ProductApi from '../Common/Mock/MockProductApi';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function loadProducts() {
  return function (dispatch) {
    return ProductApi.getAllProducts()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch((error) => {
        throw (error);
      });
  };
}
