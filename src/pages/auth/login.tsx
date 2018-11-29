import React, { Component, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/index';
import './index.scss';
import logo from '../../assets/images/logo.png';
import * as Auth from '../../api/auth';

const state = {
    username: '',
    usernameValidate: false,
    password: '',
    passwordValidate: false,
    errorMsg: '',
    rememberMe: false,
    autoLogin: false,
    loginDisable: true,
    code: ''
};

type State = Readonly<typeof state>;

type Props = {
    [key: string]: any;
};
class Login extends Component<Props, State> {
    readonly state: State;
    readonly rememberMeRef: RefObject<HTMLInputElement>;
    readonly autoLoginRef: RefObject<HTMLInputElement>;
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = state;
        this.rememberMeRef = React.createRef<HTMLInputElement>();
        this.autoLoginRef = React.createRef<HTMLInputElement>();
    }
    componentDidMount() {
        document.title = '用户登陆';
    }

    checkUsername = (username: string) => {
        const { passwordValidate } = this.state;
        const usernameValidate = !!username;
        this.setState({ username, usernameValidate, loginDisable: !(usernameValidate && passwordValidate) });
    };
    checkPassword = (password: string) => {
        const { usernameValidate } = this.state;
        const passwordValidate = !!password;
        this.setState({ password, passwordValidate, loginDisable: !(usernameValidate && passwordValidate) });
    };
    login = async () => {
        const { username, password, code } = this.state;
        const data = await Auth.login(username, password, code);
        console.log(data);
    };
    render() {
        const { loginDisable } = this.state;
        return (
            <div className="content login">
                <img src={logo} alt="6pan" className="logo" />
                <div className="input-group">
                    <input
                        type="text"
                        className="input"
                        autoComplete="off"
                        name="username"
                        placeholder="手机/用户名/密码"
                        onInput={e => {
                            this.checkUsername(e.currentTarget.value);
                        }}
                    />
                </div>
                <div className="input-group" style={{ marginBottom: '2.3rem' }}>
                    <input
                        type="password"
                        className="input"
                        autoComplete="off"
                        name="password"
                        placeholder="密码"
                        onInput={e => {
                            this.checkPassword(e.currentTarget.value);
                        }}
                    />
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
                    <button className="btn btn-login" disabled={loginDisable} onClick={() => this.login()}>
                        登陆
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ user }: ApplicationState) => ({});

export default connect(mapStateToProps)(Login);
