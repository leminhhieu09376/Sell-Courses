import { CREATE_ORDER } from "../constants/actionTypes";
const orderReducer = (
  state = {order: {} },
  action
) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { state, order: action.payload.data };
    default:
      return state;
  }
};
export default orderReducer;