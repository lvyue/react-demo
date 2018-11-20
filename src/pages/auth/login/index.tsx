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
class Login extends Component<object, State> {
    readonly state: State;
    readonly rememberMeRef: RefObject<HTMLInputElement>;
    readonly autoLoginRef: RefObject<HTMLInputElement>;
    constructor(props: Readonly<object>) {
        super(props);
        this.state = state;
        this.rememberMeRef = React.createRef<HTMLInputElement>();
        this.autoLoginRef = React.createRef<HTMLInputElement>();
    }
    componentDidMount() {
        document.title = '用户登陆';
    }
    render() {
        return (
            <div className="content login">
                <img src={logo} alt="6pan" className="logo" />
                <div className="input-group">
                    <input type="text" className="input" autoComplete="off" name="username" placeholder="手机/用户名/密码" />
                </div>
                <div className="input-group" style={{ marginBottom: '2.3rem' }}>
                    <input type="password" className="input" autoComplete="off" name="password" placeholder="密码" />
                </div>
                <div className="input-group option">
                    <label htmlFor="rememberMe" className="checkbox">
                        <input type="checkbox" id="rememberMe" name="rememberMe" ref={this.rememberMeRef} />
                        <i />
                        记住密码
                    </label>
                    <Link to="/auth/forgetPassword">忘记密码</Link>
                </div>
                <div className="input-group option" style={{ marginBottom: '5.55rem' }}>
                    <label htmlFor="autoLogin" className="checkbox">
                        <input type="checkbox" id="autoLogin" name="autoLogin" ref={this.autoLoginRef} />
                        <i />
                        自动登录
                    </label>
                    <Link to="/auth/register">注册账号</Link>
                </div>
                <div className="input-group">
                    <button className="btn btn-login">登陆</button>
                </div>
            </div>
        );
    }
}

export default Login;
