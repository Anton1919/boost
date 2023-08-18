import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { getArticles } from '../../model/slice/articlePageSlice';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                className={className}
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </div>
    );
};
