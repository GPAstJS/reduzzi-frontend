/** @format */

import { Menu } from './components/Menu';
import { MenuReduzido } from './components/MenuReduzido';

export const MenuLateral = (props) => {
    return props.menuReduzido ? (
        <MenuReduzido {...props} />
    ) : (
        <Menu {...props} />
    );
};
