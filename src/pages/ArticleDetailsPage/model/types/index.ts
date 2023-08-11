import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationSchema } from '../../index';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationSchema;
}
