import * as api from "../api/index.js";
import { FETCH_CUSTOMER } from "../constants/actionTypes.js";
export const getCustomer = (custId) => async (dispatch) => {
  try {
    const { data } = await api.fetchCustomer(custId);

    dispatch({ type: FETCH_CUSTOMER, payload: { data } });
  } catch (error) {
    console.log(error.message);
  }
};
