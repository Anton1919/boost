import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailesPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailesPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleDetailesPage, {}, [className])}>
            ArticleDetailsPage
        </div>
    );
};

export default memo(ArticleDetailsPage);
