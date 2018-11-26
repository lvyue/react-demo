import { User } from '../types/user';
import { ADD_USER, REMOVE_USER } from '../constants/User';

export interface AddUser {
    type: ADD_USER;
    user: User;
}

export interface RemoveUser {
    type: REMOVE_USER;
}

export type UserAction = AddUser | RemoveUser;

export function addUser(user: User): AddUser {
    return { type: ADD_USER, user };
}

export function removeUser(): RemoveUser {
    return { type: REMOVE_USER };
}
