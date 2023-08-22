import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView, ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

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
