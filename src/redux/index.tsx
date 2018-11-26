import { createStore } from 'redux';
import { StoreState } from './types/index';

import { user } from './reducers/User';
import { UserAction } from './actions/User';

const store = createStore<StoreState, UserAction, user, { isLogin: false; user: undefined }>(user);
