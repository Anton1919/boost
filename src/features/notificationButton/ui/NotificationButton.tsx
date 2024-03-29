import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Popover } from '@/shared/ui/Popus';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import Notifications from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '@/entities/Notifications';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

export const NotificationButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = () => {
        setIsOpen(true);
    };

    const onCloseDrawer = () => {
        setIsOpen(false);
    };

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={Notifications} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover direction="bottom left" trigger={trigger}>
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
};
