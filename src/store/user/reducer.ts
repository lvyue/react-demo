import { Reducer } from 'redux';

import { UserState } from './types';

import { ADD_USER, UPDATE_USER, REMOVE_USER } from './constants';

export const initialState: UserState = {
    isLogin: false,
    token: ''
};

const reducer: Reducer<UserState> = (state: UserState = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, info: action.user, isLogin: action.isLogin, token: action.token };
        case UPDATE_USER:
            return { ...state, info: action.user, isLogin: action.isLogin, token: action.token };
        case REMOVE_USER:
            return { ...state, info: undefined, isLogin: action.isLogin, token: action.token };
        default:
            return state;
    }
};
export default reducer;
