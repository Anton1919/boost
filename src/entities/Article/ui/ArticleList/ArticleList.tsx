import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        articles,
        className,
        view = ArticleView.SMALL,
        isLoading,
    } = props;

    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem className={cls.card} key={article.id} article={article} view={view} />
    );

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {new Array(view === ArticleView.SMALL ? 9 : 3)
                    .fill(0)
                    .map((item, index) => (
                        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
                    ))}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : <div>{t('Articles is empty')}</div>}
        </div>
    );
};
