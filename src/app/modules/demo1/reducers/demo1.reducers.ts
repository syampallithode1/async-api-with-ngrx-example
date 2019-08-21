import { createReducer, on, Action } from '@ngrx/store';
import { Post } from '../models';
import { savePosts, loadPostsError } from '../actions/demo1.actions';

export interface Demo1State {
    posts: {
        [key: string]: Post
    };
}

export const initialDemo1State: Demo1State = {} as Demo1State;

const demo1Reducer = createReducer(initialDemo1State,
    on(savePosts, (state: Demo1State, {payload}) => {
        const postEntitiesDetails  = payload.reduce((postEntities: {[key: string]: Post}, post) => ({
            ...postEntities,
            [post.id.toString()]: post
        }),
        {
            ...state.posts
        });
        return {
            posts: postEntitiesDetails
        };
    }),
    on(loadPostsError, (state: Demo1State) => ({...state, posts: null}))
);

export function reducer(state: Demo1State | undefined, action: Action) {
    return demo1Reducer(state, action);
}
