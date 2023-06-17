import * as api from "../api/index.js";
import { FETCH_COURSE_DETAIL } from "../constants/actionTypes.js";
export const getCourseDetail = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchCourseDetail(id);

    dispatch({ type: FETCH_COURSE_DETAIL, payload: { data } });
  } catch (error) {
    console.log(error.message);
  }
};
