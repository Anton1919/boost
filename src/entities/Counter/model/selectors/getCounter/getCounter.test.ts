import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('get counter', () => {
    test('get counter state', () => {
        const state: StateSchema = {
            user: {},
            counter: { value: 10 },
            loginForm: {
                password: '', username: '', error: '', isLoading: false,
            },
        };

        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
