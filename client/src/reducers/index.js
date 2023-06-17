import { combineReducers } from "redux";
import category from "./category";
import auth from "./auth";
import course from "./course";
import cart from "./cart";
import order from "./order";
import customer from "./customer";

export const reducers = combineReducers({
  category,
  auth,
  course,
  cart,
  order,
  customer,
});
