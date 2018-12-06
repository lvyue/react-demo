import React, { Component, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '@/store/index';
import logo from '@/assets/images/logo.png';
import { Store, Dispatch } from 'redux';
import { User, UserActions } from '../../store/user/types';
import * as UserAPI from '../../api/user';
import { addUser, removeUser } from '../../store/user/actions';
import { RegExp } from '../../config';

const UserPasswordInfo = 'user-password-info';
const UserPasswordInfoTimer = 'user-password-info-timer';

const state = {
    phone: '',
    phoneValidate: false,
    code: '',
    codeValidate: false,
    tips: '',
    sending: false,
    time: 120,
    btnText: '获取验证码',
    step: 1,
    info: '',
    password: ''
};

type State = Readonly<typeof state>;

type Props = {
    [key: string]: any;
};
class ForgetPassword extends Component<Props, State> {
    readonly state: State;
    private timer: number;
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = state;
        this.timer = -1;
    }
    componentDidMount() {
        document.title = '密码找回|6pan.cn';
        this.startTimer();
        let info = localStorage.getItem(UserPasswordInfo);
        if (info) {
            let infos = JSON.parse(info);
            if (Date.now() - infos.time <= 120000) {
                this.setState({ info: infos.info, code: infos.code, step: 2 });
            } else {
                localStorage.removeItem(UserPasswordInfo);
            }
        }
    }

    checkPhone = (phone: string) => {
        let phoneValidate = RegExp.phone.test(phone);
        let tips = phoneValidate ? '' : '请输入合法的手机号';
        if (!phone) {
            phoneValidate = false;
            tips = '';
        }
        this.setState({ phone, phoneValidate, tips: tips });
    };
    checkCode = (code: string) => {
        let codeValidate = RegExp.code.test(code);
        let tips = codeValidate ? '' : '请输入正确的验证码';
        if (!code) {
            codeValidate = false;
            tips = '';
        }
        this.setState({ code, codeValidate, tips: tips });
    };
    sendCode = async () => {
        const { phone } = this.state;
        this.setState({ sending: true });
        UserAPI.sendChangePasswordMessage(phone)
            .then(info => {
                // localStorage.setItem(UserPasswordInfo, JSON.stringify({ info, time: Date.now() }));
                localStorage.setItem(UserPasswordInfoTimer, '120');
                this.setState({ btnText: '120秒后重新获取', time: 120, sending: true, info });
                this.startTimer();
            })
            .catch(() => {
                this.setState({ sending: false });
            });
    };
    saveNewPassword = async () => {
        const { info, code, password } = this.state;
        this.setState({ sending: true });
        UserAPI.changePasswordByMessage(info, code, password)
            .then(info => {
                this.setState({ step: 2 });
            })
            .catch(() => {
                this.setState({ sending: false });
            });
    };
    startTimer = () => {
        this.timer = window.setInterval(() => {
            let t = localStorage.getItem(UserPasswordInfoTimer);
            if (t) {
                let time = Number(t);
                if (time !== 0) {
                    time -= 1;
                    localStorage.setItem(UserPasswordInfoTimer, time + '');
                    this.setState({ btnText: `${time}秒后重新获取`, time, sending: true });
                } else {
                    //
                    window.clearInterval(this.timer);
                    //
                    this.setState({ btnText: `获取验证码`, time: 120, sending: false });
                }
            } else {
                //
                window.clearInterval(this.timer);
                //
                this.setState({ btnText: `获取验证码`, time: 120, sending: false });
            }
        }, 1000);
    };
    nextStep = () => {
        const { info, code } = this.state;
        localStorage.setItem(UserPasswordInfo, JSON.stringify({ info, code, time: Date.now() }));
        window.clearTimeout(this.timer);
        this.setState({ step: 2 });
    };
    render() {
        const { tips, phone, phoneValidate, code, codeValidate, sending, btnText, step } = this.state;
        return (
            <div className="auth-container">
                <div className={['content', 'forget', step === 1 ? '' : 'hide'].join(' ')}>
                    <img src={logo} alt="6pan" className="logo" />
                    <h1 className="title">密码找回</h1>
                    <h2 className="subtitle">hi，请输入您注册的手机号</h2>
                    <div className="form-control">
                        <div className="label">手机号</div>
                        <div className="input-group">
                            <input
                                type="text"
                                className={!phone || (phone && phoneValidate) ? '' : 'error'}
                                autoComplete="off"
                                name="phone"
                                placeholder="手机/用户名/密码"
                                onBlur={e => {
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
                                className={['code', !code || (code && codeValidate) ? '' : 'error'].join(' ')}
                                autoComplete="off"
                                name="code"
                                placeholder="验证码"
                                onInput={e => {
                                    this.checkCode(e.currentTarget.value);
                                }}
                            />
                            <button className={['btn', 'codeBtn', sending ? 'btn-disable' : ''].join(' ')} type="button" disabled={sending || !phoneValidate} onClick={() => this.sendCode()}>
                                {btnText}
                            </button>
                        </div>
                    </div>
                    <div className="form-control tips">
                        <div className="label">验证码</div>
                        <div className="input-group">{tips}</div>
                    </div>
                    <div className="form-control action">
                        <div className="label">下一步</div>
                        <div className="input-group">
                            <button
                                className="btn btn-success btn-sm"
                                disabled={!(phoneValidate && codeValidate)}
                                onClick={() => {
                                    this.nextStep();
                                }}
                            >
                                下一步
                            </button>
                        </div>
                    </div>
                </div>

                <div className={['content', 'forget', step === 2 ? '' : 'hide'].join(' ')}>
                    <img src={logo} alt="6pan" className="logo" />
                    <h1 className="title">密码找回</h1>
                    <h2 className="subtitle">hi，请输入您的新密码</h2>
                    <div className="form-control">
                        <div className="label">新密码</div>
                        <div className="input-group">
                            <input
                                type="password"
                                className={!phone || (phone && phoneValidate) ? '' : 'error'}
                                autoComplete="off"
                                name="newPassword"
                                onBlur={e => {
                                    this.checkPhone(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="label">确认密码</div>
                        <div className="input-group">
                            <input
                                type="password"
                                className={!phone || (phone && phoneValidate) ? '' : 'error'}
                                autoComplete="off"
                                name="repeatNewPassword"
                                onBlur={e => {
                                    this.checkPhone(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-control tips">
                        <div className="label">验证码</div>
                        <div className="input-group">{tips}</div>
                    </div>
                    <div className="form-control action">
                        <div className="label">下一步</div>
                        <div className="input-group">
                            <button className="btn btn-success btn-sm" disabled={!(phoneValidate && codeValidate)}>
                                完成
                            </button>
                        </div>
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
