import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import UserImg from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({ className, src, size, alt = 'image', fallbackInverted }: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton height={size} width={size} border="50%" />;
    const errorFallback = (
        <Icon inverted={fallbackInverted} Svg={UserImg} height={size} width={size} />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
