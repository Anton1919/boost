import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    items: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ items, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={items.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <items.icon className={cls.icon} />
            <span className={cls.link}>
                {t(items.text)}
            </span>
        </AppLink>
    );
});
