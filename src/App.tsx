import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Action } from 'redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { ApplicationState } from '@/store/index';

import { Store, Dispatch } from 'redux';
import { User, UserActions } from '@/store/user/types';
import * as UserAPI from '@/api/user';
import { addUser, removeUser } from '@/store/user/actions';

import IndexPage from '@/pages/index/index';
import AuthPage from '@/pages/auth/index';
import HomePage from '@/pages/home/index';

interface PropsFromState {}

interface PropsFromDispatch {
    [key: string]: any;
}

// Any additional component props go here.
interface OwnProps {
    store: Store;
}

// Create an intersection type of the component props and our Redux props.
type AllProps = PropsFromState & PropsFromDispatch & OwnProps;

class App extends Component<AllProps> {
    async componentDidMount() {
        const { actions } = this.props;
        try {
            const user = await UserAPI.info();
            actions.addUser(user.token, user.user);
        } catch (error) {
            actions.removeUser();
        }
    }
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/auth" component={AuthPage} />
                        <Route path="/home" component={HomePage} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

const mapStateToProps = ({ user }: ApplicationState) => ({
    isLogin: user.isLogin,
    user: user.info
});

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({ actions: { addUser: (token: string, user: User) => dispatch(addUser(token, user)), removeUser: (token: string, user: User) => dispatch(removeUser(token, user)) } });

export default connect<PropsFromState, PropsFromDispatch, OwnProps, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps
)(App);
