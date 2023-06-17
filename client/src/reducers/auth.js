import * as actionType from "../constants/actionTypes";
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      if (action.errors == null) {
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      }

      return {
        ...state,
        authData: action.data,
        loading: false,
        errors: action.errors,
      };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
