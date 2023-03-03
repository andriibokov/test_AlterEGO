export interface User {
  login: null;
  token: null;
  id: null;
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
  REMOVE_USER = "REMOVE_USER",
}
