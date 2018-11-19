import React from "react";

import {Route,Switch} from "react-router-dom";

const login = ()=> (<div>登录</div>);
const register = ()=> (<div>注册</div>);

class Auth extends React.Component {

    render(){
        return <div className="auth-container">
            <Switch>
                <Route exact path="/auth/login"  component={login}/>
                <Route path="/auth/register" component={register}/>
            </Switch>
        </div>
    }
}

export default Auth;