import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SelectOption } from '@/shared/ui/Select/Select';
import { Tabs, TabsItem } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/const/const';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();

    const typeTabs = useMemo<SelectOption<ArticleType>[]>(
        () => [
            { value: ArticleType.ALL, content: t('Все статьи') },
            { value: ArticleType.IT, content: t('Ай ти') },
            { value: ArticleType.SCIENCE, content: t('Наука') },
            { value: ArticleType.ECONOMICS, content: t('Экономика') },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabsItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
};
