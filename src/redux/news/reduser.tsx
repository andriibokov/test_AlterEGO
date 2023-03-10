import { PostActionTypes, postData } from "../../types/news";

const initialState: postData = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action: any): postData => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PostActionTypes.REMOVE_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
