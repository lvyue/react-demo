import {Reducer} from 'redux';

import {UserState, UserActions} from './types';

import {ADD_USER, UPDATE_USER, REMOVE_USER} from './constants';

export const initialState: UserState = {
    isLogin: false,
};

const reducer: Reducer<UserState, UserActions> = (state: UserState = initialState, action: UserActions) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, info: action.payload.user, isLogin: action.payload.isLogin};
        case UPDATE_USER:
            return {...state, info: action.payload.user, isLogin: action.payload.isLogin};
        case REMOVE_USER:
            return {...state, info: undefined, isLogin: action.payload.isLogin};
        default:
            return state;
    }
};

export default reducer;
