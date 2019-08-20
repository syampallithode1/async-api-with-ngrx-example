import { createReducer, on, createSelector } from '@ngrx/store';
import { loading, loadingSuccess } from './../actions';

export interface LoaderState {
    loading: boolean;
}

export const initialState: LoaderState = {
    loading: false
};

export const loaderReducer = createReducer(initialState,
    on(loading,
        (state: LoaderState) => ({
            ...state,
            loading: true
    })),
    on(loadingSuccess, (state: LoaderState) => ({
        ...state,
        loading: false
    }))
);

