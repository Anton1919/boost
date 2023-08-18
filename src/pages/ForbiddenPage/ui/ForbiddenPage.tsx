import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

interface indexProps {
    className?: string;
}

export const ForbiddenPage = ({ className }: indexProps) => {
    const { t } = useTranslation();

    return <div className={classNames('', {}, [className])}>{t('Forbidden')}</div>;
};
