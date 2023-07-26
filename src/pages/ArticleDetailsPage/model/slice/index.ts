import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types';
import {
    articleDetailsPageRecommendationReducer,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationReducer,
    comments: articleDetailsCommentsReducer,
});
