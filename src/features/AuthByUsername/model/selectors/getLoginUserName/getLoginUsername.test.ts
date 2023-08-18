import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('login error', () => {
    test('username exist', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123');
    });
    test('no password', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
