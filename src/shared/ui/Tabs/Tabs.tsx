import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabsItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabsItem[];
    value: string;
    onTabClick: (tab: TabsItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        onTabClick,
        value,
    } = props;

    const clickHandle = useCallback((tab: TabsItem) => () => onTabClick(tab), [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((el) => (
                <Card
                    className={cls.tabs}
                    theme={el.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={el.value}
                    onClick={clickHandle(el)}
                >
                    {el.content}
                </Card>
            ))}
        </div>
    );
});
