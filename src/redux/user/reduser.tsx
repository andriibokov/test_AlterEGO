import { UserActionTypes, User } from "../../types/user";

const initialState: User = {
  login: null,
  token: null,
  id: null,
};

export const userReducer = (state = initialState, action: any): User => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        login: action.payload.login,
        token : action.payload.token,
        id: action.payload.id,
      };
    case UserActionTypes.REMOVE_USER:
      return {
        login: null,
        token: null,
        id: null,
      };
    default:
      return state;
  }
};
