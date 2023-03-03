import { postReducer } from "./redux/news/reduser";
import { userReducer } from "./redux/user/reduser";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const reducer = { postReducer, userReducer };
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  thunk: true,
});

export const store = configureStore({ reducer, middleware });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
