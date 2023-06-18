import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { loginByUserName } from '../services/loginByUserName';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },

        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserName.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: loginAction } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
