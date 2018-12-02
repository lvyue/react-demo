import React, { SFC } from 'react';
import { NavLink } from 'react-router-dom';
import { menus } from '../../config';
import { Menu } from './menu';
type Props = {};
export const Menus: SFC<Props> = () => <ul className="menu">{menus.map((menu, index) => Menu({ menu, id: 'main-menu-' + index }))}</ul>;
