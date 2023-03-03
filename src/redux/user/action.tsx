import axios from "axios";
import { Dispatch } from "redux";
import { UserActionTypes } from "../../types/user";

export const login = () => ({
  type: UserActionTypes.SET_USER,
});

export const logout = (posts: any) => ({
  type: UserActionTypes.REMOVE_USER,
  payload: posts,
});

export const userAuth = () => {
  return async (dispatch: Dispatch) => {
    dispatch(login());
  };
};