import React, { SFC } from 'react';

import { NavLink } from 'react-router-dom';
type Props = {};
export const Nav: SFC<Props> = ({}) => (
    <nav>
        <ul>
            <NavLink to="/">首页</NavLink>
            <NavLink to="/auth/register">注册</NavLink>
            <NavLink to="/auth/login">登录</NavLink>
        </ul>
    </nav>
);
