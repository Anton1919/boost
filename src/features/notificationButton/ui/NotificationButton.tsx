import { Popover } from 'shared/ui/Popus';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import Notifications from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notifications';
import React from 'react';
import cls from './NotificationButton.module.scss';

export const NotificationButton = () => (
    <Popover
        direction="bottom left"
        trigger={
            <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={Notifications} inverted />
            </Button>
        }
    >
        <NotificationList className={cls.notifications} />
    </Popover>
);
