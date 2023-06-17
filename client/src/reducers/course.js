import { FETCH_COURSE_DETAIL } from "../constants/actionTypes";

const courseReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case FETCH_COURSE_DETAIL:
      return { ...state, course: action.payload.data };
    default:
      return state;
  }
};
export default courseReducer;
