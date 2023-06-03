import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import './NotFoundPage.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('NotFoundPage', {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
