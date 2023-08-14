import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { memo } from 'react';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
    const { t } = useTranslation();

    const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

    if (isLoading || error) return null;

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('Рекомендуем')} />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <ArticleList articles={articles} target="_blank" />
        </VStack>
    );
});
