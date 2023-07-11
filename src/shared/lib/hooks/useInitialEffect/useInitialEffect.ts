import { useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';

export const useInitialEffect = (callback: () => void) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
};
