import { UserActionTypes, User } from "../../types/user";

const initialState: User = {
  login: localStorage.getItem("isAuth"),
  isAuth: false,
};

export const userReducer = (state = initialState, action: any): User => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        login: action.payload.login,
        isAuth: action.payload.isAuth,
      };
    case UserActionTypes.REMOVE_USER:
      return {
        ...state,
        login: '',
        isAuth: false,
      };
    default:
      return state;
  }
};
