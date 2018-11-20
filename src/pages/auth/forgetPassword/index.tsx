import React, { Component, RefObject } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import logo from '../../../assets/images/logo.png';
const state = {
    username: '',
    password: '',
    errorMsg: ''
};
type State = Readonly<typeof state>;
class ForgetPassword extends Component<object, State> {
    readonly state: State;
    constructor(props: Readonly<object>) {
        super(props);
        this.state = state;
    }
    render() {
        return (
            <div className="content login">
                <img src={logo} alt="6pan" className="logo" />
                <div className="input-group">
                    <input type="text" className="input" autoComplete="off" name="username" placeholder="手机/用户名/密码" />
                </div>
                <div className="input-group">
                    <input type="password" className="input" autoComplete="off" name="password" placeholder="密码" />
                </div>
                <div className="input-group">
                    <label htmlFor="" className="checkbox">
                        <input type="radio" />
                        <i />
                        记住密码
                    </label>
                    {/* <Link to="/auth/forgetPassword" component={}>
                        忘记密码
                    </Link> */}
                </div>
            </div>
        );
    }
}

export default ForgetPassword;
