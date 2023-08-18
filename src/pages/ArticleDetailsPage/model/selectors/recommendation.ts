import { StateSchema } from '@/app/providers/StoreProvider';

// eslint-disable-next-line
export const getArticleRecommendationIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations.isLoading;
export const getArticleRecommendationError = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations.error;
