import { createAction } from '@ngrx/store';

export const getPosts = createAction('[DEMO1] GET_POSTS');

export const loadPosts = createAction('[DEMO1] LOAD_POSTS');

export const loadPostsSuccess = createAction('[DEMO1] LOAD_POSTS_SUCCESS');

export const loadPostsError = createAction('[DEMO1] LOAD_POSTS_ERROR');

export const savePosts = createAction('[DEMO1] SAVE_POSTS', (props) => ({payload: props}));
