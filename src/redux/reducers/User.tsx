import { UserAction } from '../actions/User';
import { ADD_USER, REMOVE_USER } from '../constants/User';

import { StoreState } from '../types/index';

export function user(state: StoreState, action: UserAction): StoreState {
    switch (action.type) {
        case ADD_USER:
            return { ...state, user: action.user };
        case REMOVE_USER:
            return { ...state, user: undefined, isLogin: false };
    }
    return state;
}
