import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean
    error?: string
    limit: number
    page: number
    hasMore: boolean

    order: SortOrder
    view: ArticleView
    sort: ArticleSortField
    search: string
    _inited: boolean
    type: ArticleType
}
