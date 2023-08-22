import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FC, useMemo } from 'react';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface IRequireAuth {
    roles?: UserRole[];
    children: JSX.Element;
}

export const RequireAuth: FC<IRequireAuth> = (props) => {
    const { roles, children } = props;
    const userRoles = useSelector(getUserRoles);

    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((role) => userRoles?.includes(role));
    }, [roles, userRoles]);

    if (!auth || !hasRequireRoles) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequireRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
};
