import {ActionCreator} from 'redux';
import {User, AddUserAction, UpdateUserAction, RemoveUserAction} from './types';
import {ADD_USER, UPDATE_USER, REMOVE_USER} from './constants';

// user login
export const addUser: ActionCreator<AddUserAction> = (user: User) => ({
    type: ADD_USER,
    payload: {
        user,
        isLogin: !!user,
    },
});

// set profile
export const updateUser: ActionCreator<UpdateUserAction> = (user: User) => ({
    type: UPDATE_USER,
    payload: {
        user,
        isLogin: !!user,
    },
});

// user logout
export const removeUser: ActionCreator<RemoveUserAction> = () => ({
    type: REMOVE_USER,
    payload: {
        isLogin: false,
    },
});
