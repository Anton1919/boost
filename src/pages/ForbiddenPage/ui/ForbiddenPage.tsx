import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface indexProps {
    className?: string;
}

export const ForbiddenPage = ({ className }: indexProps) => {
    const { t } = useTranslation();

    return <div className={classNames('', {}, [className])}>{t('Forbidden')}</div>;
};
