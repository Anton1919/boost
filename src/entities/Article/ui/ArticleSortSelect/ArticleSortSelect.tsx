import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '../../model/const/const';
import cls from './ArticleSortSelect.module.scss';

interface ArticleSortSelectProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelect = (props: ArticleSortSelectProps) => {
    const { sort, order, onChangeSort, onChangeOrder, className } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            { value: 'asc', content: t('возрастанию') },
            { value: 'desc', content: t('убыванию') },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            { value: ArticleSortField.CREATED, content: t('дате создания') },
            { value: ArticleSortField.TITLE, content: t('названию') },
            { value: ArticleSortField.VIEWS, content: t('просмотрам') },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                onChange={onChangeSort}
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
            />
            <Select
                value={order}
                onChange={onChangeOrder}
                options={orderOptions}
                label={t('по')}
                className={cls.order}
            />
        </div>
    );
};
