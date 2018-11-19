import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './index.scss';
import Register from './register/index';
import Login from './login/index';

class Auth extends React.Component {
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
