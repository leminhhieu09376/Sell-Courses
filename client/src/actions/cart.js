import * as api from "../api/index.js";
import { FETCH_CART,UPDATE_CART } from "../constants/actionTypes.js";
export const getCart = (custId) => async (dispatch) => {
  try {
    const { data } = await api.fetchCart(custId);

    dispatch({ type: FETCH_CART, payload: { data } });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateCart = (id, model) => async (dispatch) => {
  try {
    const { data } = await api.updateCart(id, model);

    dispatch({ type: UPDATE_CART, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
