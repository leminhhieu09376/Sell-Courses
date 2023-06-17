import * as api from "../api/index.js";
import { FETCH_ALL_CATEGORY, FETCH_CATEGORY } from "../constants/actionTypes.js";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();

    dispatch({ type: FETCH_ALL_CATEGORY, payload: { data } });
  } catch (error) {
    console.log(error.message);
  }
};
export const getCategory = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchCategory(id);

    dispatch({ type: FETCH_CATEGORY, payload: { data } });
  } catch (error) {
    console.log(error.message);
  }
};
