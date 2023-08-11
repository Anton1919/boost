import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageRecommendationReducer } from '../../model/slice/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationReducer,
    comments: articleDetailsCommentsReducer,
});
