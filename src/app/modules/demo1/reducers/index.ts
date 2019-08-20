import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Demo1State } from './demo1.reducers';
import { Post, Demo1Reducers  } from '../models';

/*
    https://medium.com/@kjvelarde/one-module-multiple-reducers-ngrx-c61eac900243
*/

export * from './demo1.reducers';

export const getDemo1State = createFeatureSelector<any, Demo1State>(Demo1Reducers.demo1Reducer);

export const getPosts = createSelector(getDemo1State, (demo1: Demo1State) => demo1.posts ? Object.values(demo1.posts) as Post[] : null);
