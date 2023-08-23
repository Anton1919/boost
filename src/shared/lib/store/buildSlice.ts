import { ActionCreatorsMapObject, bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit/dist';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = () => {
        const dispatch = useDispatch();

        return useMemo(
            () => bindActionCreators(slice.actions as ActionCreatorsMapObject<any>, dispatch),
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
}
