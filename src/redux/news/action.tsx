import axios from "axios";
import { Dispatch } from "redux";
import { PostActionTypes } from "../../types/news";

export const fetchPostsRequest = () => ({
  type: PostActionTypes.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: any) => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError = (error: string) => ({
  type: PostActionTypes.FETCH_POSTS_ERROR,
  payload: error,
});

export const removePostSuccess = (posts:any) => ({
  type: PostActionTypes.REMOVE_POST_SUCCESS,
  payload: posts,
});

export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.data;
      dispatch(fetchPostsSuccess(posts));
    } catch (error: any) {
      dispatch(fetchPostsError(error.message));
    }
  };
};

export const removePost = (id: number, posts: any) => {
  return (dispatch: Dispatch) => {
    const newPost: any = posts.filter((post: any) => post.id != id);
    dispatch(removePostSuccess(newPost));
  };
};