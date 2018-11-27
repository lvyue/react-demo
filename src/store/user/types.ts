import { Action } from 'redux';
import { ADD_USER, UPDATE_USER, REMOVE_USER } from './constants';

export interface User {
    _id: string;
    username: string;
    nickname: string;
}

export interface UserState {
    isLogin: boolean;
    info?: User;
}

export interface AddUserAction extends Action {
    type: ADD_USER;
    user: User;
    isLogin: boolean;
}

export interface UpdateUserAction extends Action {
    type: UPDATE_USER;
    user: User;
    isLogin: boolean;
}

export interface RemoveUserAction extends Action {
    type: REMOVE_USER;
    isLogin: boolean;
}

export type UserActions = AddUserAction | UpdateUserAction | RemoveUserAction;
