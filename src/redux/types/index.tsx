import { User } from './User';

export interface StoreState {
    isLogin: boolean;
    user?: User;
}
