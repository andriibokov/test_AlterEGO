export interface User {
  login: string | null;
  isAuth: boolean;
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
  REMOVE_USER = "REMOVE_USER",
}
