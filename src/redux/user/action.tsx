import { User, UserActionTypes } from "../../types/user";

export const LoggedIn = (login: string | null, isAuth: boolean) => ({
  type: UserActionTypes.SET_USER,
  payload: {
    login: login,
    isAuth: isAuth,
  }
});

export const LoggedOut = () => ({
  type: UserActionTypes.REMOVE_USER,
});
