import { Action } from 'redux';
import { ADD_USER, UPDATE_USER, REMOVE_USER } from './constants';

export interface User {
    _id: string;
    username: string;
    nickname: string;
    countryCode: string;
    createIp: string;
    createTime: number;
    email: string;
    icon: string;
    name: string;
    phone: string;
    spaceCapacity: number;
    spaceUsed: number;
    ssid: { [key: string]: any };
    status: number;
    type: number;
    uuid: number;
    version: number;
}

export interface UserState {
    isLogin: boolean;
    token: string;
    info?: User;
}

export interface AddUserAction extends Action {
    type: ADD_USER;
    user: User;
    isLogin: boolean;
    token: string;
}

export interface UpdateUserAction extends Action {
    type: UPDATE_USER;
    user: User;
    isLogin: boolean;
    token: string;
}

export interface RemoveUserAction extends Action {
    type: REMOVE_USER;
    isLogin: boolean;
    token: string;
}

export type UserActions = AddUserAction | UpdateUserAction | RemoveUserAction;
