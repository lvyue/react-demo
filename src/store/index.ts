import { logger } from 'redux-logger';
import { createStore, applyMiddleware, Store, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { UserState } from './user/types';
import userReducer from './user/reducer';

export interface ApplicationState {
    user: UserState;
    // router: RouterState;
    // baseUrl: string;
}

export default function initStore(initialState: ApplicationState): Store<ApplicationState> {
    // create the composing function for our middlewares
    const composeEnhancers = composeWithDevTools({});

    return createStore(
        combineReducers<ApplicationState>({
            user: userReducer
            // router: connectRouter(history)
        }),
        initialState,
        composeEnhancers(applyMiddleware(logger))
    );
}
