/** @format */
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// const userData = {
//     permissions: [],
//     roles: ['admin'],
// };

const CheckAccessPerm = ({ children, perms = [], roles = [] }) => {
    const { currentUser } = useContext(AuthContext);

    if (
        currentUser.permissions?.find((perm) =>
            perms.includes(perm?.name),
        ) ||
        currentUser.roles?.find((role) => roles.includes(role?.name))
    ) {
        return children;
    }

    return;
};

export default CheckAccessPerm;
