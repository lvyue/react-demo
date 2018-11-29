import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { ApplicationState } from './store/index';
import IndexPage from './pages/index/index';
import AuthPage from './pages/auth/index';
import { Store } from 'redux';

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
    render() {
        const { store, isLogin } = this.props;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/auth" component={AuthPage} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

const mapStateToProps = ({ user }: ApplicationState) => ({
    isLogin: user.isLogin
});

export default connect<PropsFromState, PropsFromDispatch, OwnProps, ApplicationState>(mapStateToProps)(App);
