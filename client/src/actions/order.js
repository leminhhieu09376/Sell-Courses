import { CREATE_ORDER } from "../constants/actionTypes";
import * as api from "../api/index.js";
export const createOrder = (model, router) => async (dispatch) => {
  try {
    const { data } = await api.createOrder(model);
    dispatch({ type: CREATE_ORDER, payload: { data } });
    router("/my-learning");
  } catch (error) {
    console.log(error.message);
  }
};
