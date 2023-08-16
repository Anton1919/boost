import { Dropdown } from 'shared/ui/Popus';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useTranslation } from 'react-i18next';

export const AvatarDropdown = () => {
    const { t } = useTranslation();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админка'),
                      href: RoutePath.admin_panel,
                  },
              ]
            : []),
        {
            content: t('Профиль'),
            href: RoutePath.profile + authData ?? authData?.id,
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    if (!authData) return null;

    return (
        <Dropdown
            ref={dropdownRef}
            direction="bottom left"
            items={items}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
};
