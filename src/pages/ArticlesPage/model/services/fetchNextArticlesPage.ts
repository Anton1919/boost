import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../model/slice/articlePageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading, getArticlesPageNum,
} from '../../model/selectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articleDetailsPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        const page = getArticlesPageNum(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({ page: page + 1 }));
        }
    },
);
