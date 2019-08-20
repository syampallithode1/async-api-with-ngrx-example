import { Injectable } from '@angular/core';
import { exhaustMap, map, withLatestFrom, catchError } from 'rxjs/operators';
import { Store, select, Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as demo1Action from '../actions';
import * as demo1Reducer from '../reducers';
import { of, Observable } from 'rxjs';
import { Demo1State } from '../reducers/demo1.reducers';
import { Post } from '../models';
import { loadingSuccess } from 'src/app/core/actions';
import { selectLoading } from 'src/app/core/reducer';
import { Demo1Service } from '../services/demo1.service';

@Injectable()

export class Demo1Effects {
    /*
        Effects isolate side effects from components.
        Effects are long running service that listen to an observable of EVERY ACTION dispatched from the store.
        Listen for particular action types, and “do something” when that action happens.
        Effects perform tasks, which are synchronous or asynchronous and return a new Action.
    */
    constructor(private action$: Actions, private demo1Service: Demo1Service, private store: Store<Demo1State>) {}
    /*
        Objective: To get rid of placing multiple Api request if expected data is present in state.
    */
    loadPosts$: Observable<Action> = createEffect(() => this.action$.pipe(
        /*
            Actions are filtered using ofType operator.
            The ofType operator takes one or more actions as argument to filter on which action to act upon.
        */
        ofType(demo1Action.loadPosts),
        /*
            When STATE values are needed, the RxJS withLatestFrom operator can be used to provide it. 
        */
        withLatestFrom(this.store.pipe(select(demo1Reducer.getPosts))),
        /*
            The RxJS exhaustMap operator, Ignores the new projected observables if previous projected observables
            has not yet completed (https://rxjs-dev.firebaseapp.com/api/operators/exhaustMap).
            The callback gets action and state value as argument.
        */
        exhaustMap(([action, posts]: [Action, Post[]]) => (
                /*
                    Output of exhaustMap should be an observable ACTION.
                    Here one conditional operator is applied to check wheather the expected value is present in state.
                */
                posts ?
                /*
                    Expected data is already loaded, return an observable action of success(loadPostsSuccess).
                */
                of(demo1Action.loadPostsSuccess()) :
                /*
                    Expected data is not already loaded or not present in state,
                    Place an Api call to fetch data and return an observable of action with api response as payload.
                    If Api request fails due to network error or server error, returns an observable action of error(loadPostsError).
                */
                    this.demo1Service.getPosts().pipe(
                                map((responsePosts: Post[]) => (demo1Action.savePosts(responsePosts.splice(0, 10)))),
                                catchError((error: Error) => of(demo1Action.loadPostsError()))
                )
            )
        ),
    ));

    /*
        Objective: To get rid of application loader if actions like savePosts or loadPostsError dispatched, 
    */
    appLoader$: Observable<Action> = createEffect(() => this.action$.pipe(
        /*
            The ofType operator takes one or more actions as argument to filter on which action to act upon.
        */
        ofType(demo1Action.savePosts, demo1Action.loadPostsError),
        /*
            When STATE values are needed, the RxJS withLatestFrom operator can be used to provide it.
            Return application loader state(Current value of application loader).
        */
        withLatestFrom(this.store.pipe(select(selectLoading))),
        /*
            The RxJS exhaustMap operator, Ignores the new projected observables if previous projected observables
            has not yet completed (https://rxjs-dev.firebaseapp.com/api/operators/exhaustMap ).
            The callback gets action and state value as argument.
            If loading status is true, returns an observable action of success.
        */
        exhaustMap(([action, loading]: [Action, boolean]) => of(loading ? loadingSuccess() : null))
    ));
}

