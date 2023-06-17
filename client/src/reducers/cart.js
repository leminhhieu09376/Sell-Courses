import { FETCH_CART,UPDATE_CART } from "../constants/actionTypes";

const cartReducer = (state = { cart: {} }, action) => {
  switch (action.type) {
    case FETCH_CART:
      return { ...state, cart: action.payload.data.result };
    case UPDATE_CART:
      return { ...state, cart: action.payload.result };
    default:
      return state;
  }
};
export default cartReducer;
