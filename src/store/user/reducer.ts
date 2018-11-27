import { Reducer } from 'redux';

import { UserState } from './types';

import { ADD_USER, UPDATE_USER, REMOVE_USER } from './constants';

export const initialState: UserState = {
    isLogin: false
};

const reducer: Reducer<UserState> = (state: UserState = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, info: action.user, isLogin: action.isLogin };
        case UPDATE_USER:
            return { ...state, info: action.user, isLogin: action.isLogin };
        case REMOVE_USER:
            return { ...state, info: undefined, isLogin: action.isLogin };
        default:
            return state;
    }
};
export default reducer;
