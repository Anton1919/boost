import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@/shared/ui/Popus';
import { Avatar } from '@/shared/ui/Avatar';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

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
            trigger={<Avatar fallbackInverted size={30} src={authData.avatar} />}
        />
    );
};
