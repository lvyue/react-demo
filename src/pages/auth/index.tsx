import React, { SFC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './register';
import ForgetPassword from './forgetPassword';
import Login from './login';
const Auth: SFC<{}> = ({}) => (
    <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/forget-password" component={ForgetPassword} />
    </Switch>
);
export default Auth;
