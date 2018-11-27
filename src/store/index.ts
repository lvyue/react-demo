import { createStore, applyMiddleware, Store, combineReducers, Reducer } from 'redux';

import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';

import { composeWithDevTools } from 'redux-devtools-extension';

import { History } from 'history';

import { UserState, UserActions } from './user/types';
import userReducer, { initialState as userInitialState } from './user/reducer';
import reducer from './user/reducer';

export interface ApplicationState {
    user: UserState;
    // router: RouterState;
}

export default function initStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
    // create the composing function for our middlewares
    const composeEnhancers = composeWithDevTools({});

    return createStore(
        combineReducers<ApplicationState>({
            user: userReducer
            // router: connectRouter(history)
        }),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history)))
    );
}
