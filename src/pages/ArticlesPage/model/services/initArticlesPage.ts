import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { articlesPageActions } from '../../model/slice/articlePageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { getArticlesPageInited } from '../../model/selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (typeFromUrl) {
                dispatch(articlesPageActions.setType(typeFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl));
            }
            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
