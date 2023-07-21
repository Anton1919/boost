import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (callback: (...args: any) => void, delay: number) => {
    const timerRef = useRef(null) as MutableRefObject<any>;

    return useCallback((...args: any) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
        // eslint-disable-next-line
    }, []);
};
