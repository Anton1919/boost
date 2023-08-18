import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article/model/const/const';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    limit: number;
    page: number;
    hasMore: boolean;

    order: SortOrder;
    view: ArticleView;
    sort: ArticleSortField;
    search: string;
    _inited: boolean;
    type: ArticleType;
}
