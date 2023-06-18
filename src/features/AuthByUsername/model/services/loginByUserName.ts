import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

interface LoginByUserName {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserName>(
    'login/loginByUserName',
    async (authData, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post('http://localhost:8000/login', authData);

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
            dispatch(userActions.setAuthData(res.data));
            return res.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Введите верный логин или пароль');
        }
    },
);
