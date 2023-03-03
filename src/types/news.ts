export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface postData {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export enum PostActionTypes {
  FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS",
}
