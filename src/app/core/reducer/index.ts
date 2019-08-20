import { createSelector } from '@ngrx/store';
import { LoaderState } from './loader.reducer';

export * from './loader.reducer';
export * from './metaReducers';

export const selectLoader = (state: any) => state.appLoader;

export const selectLoading = createSelector(selectLoader, (state: LoaderState) => state.loading);
