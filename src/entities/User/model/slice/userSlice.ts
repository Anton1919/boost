import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';

const initialState: UserSchema = {

};

const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = counterSlice;
export const { reducer: userReducer } = counterSlice;
