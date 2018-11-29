import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './index.scss';
import Register from './register';
import Login from './login';
const initState = {};
type State = Readonly<typeof initState>;
class Auth extends React.Component<object, State> {
    readonly state: State;
    constructor(props: Readonly<object>) {
        super(props);
        this.state = initState;
    }
    render() {
        return (
            <div className="auth-contianer">
                <Switch>
                    <Route exact path="/auth/login" component={Login} />
                    <Route path="/auth/register" component={Register} />
                </Switch>
            </div>
        );
    }
}

export default Auth;
