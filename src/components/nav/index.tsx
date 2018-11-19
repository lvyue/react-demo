import React from 'react';

import {NavLink} from 'react-router-dom'

export const nav = () => (<nav> <ul><NavLink to="/">首页</NavLink><NavLink to="/auth/register">注册</NavLink><NavLink to="/auth/login">登录</NavLink></ul></nav>);