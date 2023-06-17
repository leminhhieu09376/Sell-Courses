import { FETCH_CUSTOMER } from "../constants/actionTypes";

const customerReducer = (state = { customer: {} }, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER:
      return { ...state, customer: action.payload.data };
    default:
      return state;
  }
};
export default customerReducer;
