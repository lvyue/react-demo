import React, { Component, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '@/store/index';
import logo from '@/assets/images/logo.png';
import { Store, Dispatch } from 'redux';
import { User, UserActions } from '@/store/user/types';
import * as UserAPI from '@/api/user';
import { addUser, removeUser } from '@/store/user/actions';

const state = {
    phone: '',
    phoneValidate: false,
    code: '',
    codeValidate: false,
    tips: ''
};

type State = Readonly<typeof state>;

type Props = {
    [key: string]: any;
};
class ForgetPassword extends Component<Props, State> {
    readonly state: State;
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = state;
    }
    componentDidMount() {
        document.title = '密码找回|6pan.cn';
    }

    checkPhone = (phone: string) => {
        // const { codeValidate } = this.state;
        // const phoneValidate = !!phone;
        // this.setState({ phone, phoneValidate, loginDisable: !(phoneValidate && codeValidate) });
    };
    checkCode = (code: string) => {
        // const { phoneValidate } = this.state;
        // const codeValidate = !!code;
        // this.setState({ code, codeValidate, loginDisable: !(phoneValidate && codeValidate) });
    };
    login = async () => {
        // const { phone, code} = this.state;
        // const { actions } = this.props;
        // try {
        //     const data = await UserAPI.login(phone, code);
        //     actions.addUser(data.token, data.user);
        // } catch (error) {
        //     actions.removeUser();
        // }
    };
    render() {
        const { tips, phoneValidate, codeValidate } = this.state;
        return (
            <div className="auth-container">
                <div className="content forget">
                    <img src={logo} alt="6pan" className="logo" />
                    <h1 className="title">密码找回</h1>
                    <h2 className="subtitle">hi，请输入您注册的手机号</h2>
                    <div className="form-control">
                        <div className="label">手机号</div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input"
                                autoComplete="off"
                                name="phone"
                                placeholder="手机/用户名/密码"
                                onInput={e => {
                                    this.checkPhone(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="label">验证码</div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="code"
                                autoComplete="off"
                                name="phone"
                                placeholder="验证码"
                                onInput={e => {
                                    this.checkCode(e.currentTarget.value);
                                }}
                            />
                            <button className="codeBtn">获取验证码</button>
                        </div>
                    </div>
                    <div className="form-control tips">
                        <div className="label">验证码</div>
                        <div className="input-group">{tips}</div>
                    </div>
                    <div className="form-actions">
                        <button className="btn btn-success btn-sm" disabled={!(phoneValidate && codeValidate)}>
                            下一步
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({ actions: { addUser: (token: string, user: User) => dispatch(addUser(token, user)), removeUser: (token: string, user: User) => dispatch(removeUser(token, user)) } });

export default connect(
    null,
    mapDispatchToProps
)(ForgetPassword);
