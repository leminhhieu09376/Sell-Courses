import { AUTH, LOGOUT } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (userData, router) => (dispatch) => {
  try {
    api
      .signIn(userData)
      .then((res) => {
        const data = res.data;
        if (data.success) {
          dispatch({ type: AUTH, data });
          router("/");
        } else {
          dispatch({ type: AUTH, errors: data.message });
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  } catch (errors) {
    console.log("Error in action " + errors);
  }
};

export const signup = (userData, router) => async (dispatch) => {
  try {
    const { data } = await api.signup(userData);

    dispatch({ type: AUTH, data });

    router("/");
  } catch (error) {
    console.log(error);
  }
};

export const changepassword = (userData, router) => async (dispatch) => {
  try {
    const { data } = await api.changepass(userData);

    dispatch({ type: LOGOUT, data });

    router("/");
  } catch (error) {
    console.log(error);
  }
};

export const resetpassword = (userData, router) => async (dispatch) => {
  try {
    const { data } = await api.resetpass(userData);

    dispatch({ type: LOGOUT, data });


  } catch (error) {
    console.log(error);
  }
};

export const resetpassword2 = (userData, router) => async (dispatch) => {
  try {
    const { data } = await api.resetchangepassword(userData);

    dispatch({ type: LOGOUT, data });
    router("/");

  } catch (error) {
    console.log(error);
  }
};

