import React, { SFC } from 'react';

import { NavLink } from 'react-router-dom';
import Icon from '../icon';
export type MenuType = {
    name: string;
    isLabel: boolean;
    location: string;
    icon: string;
    children?: MenuType[];
};
type Props = {
    menu: MenuType;
    id: string;
};
export const Menu: SFC<Props> = ({ menu, id }) => (
    <li key={id}>
        {menu.isLabel && (
            <div className="label">
                {menu.icon && Icon(menu.icon)}
                {menu.name}
            </div>
        )}
        {!menu.isLabel && (
            <NavLink to={menu.location} className="label" activeClassName="active">
                {menu.name}
            </NavLink>
        )}
        {menu.children && <ul className="menu sub">{menu.children.map((m, index) => Menu({ menu: m, id: id + '-sub-' + index }))}</ul>}
    </li>
);
