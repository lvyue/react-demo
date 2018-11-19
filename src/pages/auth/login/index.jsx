import React, { Component } from 'react';
import './index.scss';
import logo from '../../../assets/images/logo.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.unref = React.createRef();
        this.state = {};
    }
    render() {
        return (
            <div className="content login">
                <img src={logo} alt="6pan" className="logo" />
                <div className="input-group">
                    <input type="text" className="input" autoComplete="off" name="username" placeholder="手机/用户名/密码" ref={this.unref} />
                </div>
                <div className="input-group">
                    <input type="password" className="input" autoComplete="off" name="password" placeholder="密码" ref={this.unref} />
                </div>
            </div>
        );
    }
}

export default Login;
