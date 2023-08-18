import { Link, LinkProps } from 'react-router-dom';
import { FC, ForwardedRef, forwardRef, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link
            ref={ref}
            to={to}
            className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
