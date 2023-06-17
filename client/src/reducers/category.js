import { FETCH_ALL_CATEGORY, FETCH_CATEGORY } from "../constants/actionTypes";

const categoryReducer = (
  state = { categories: [] },
  action
) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORY:
      return { ...state, categories: action.payload.data };
    case FETCH_CATEGORY:
      return { ...state, category: action.payload.data };
    default:
      return state;
  }
};
export default categoryReducer;