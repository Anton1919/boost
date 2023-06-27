import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData, getProfileError } from 'entities/Profile';
import { Country } from 'entities/Country';

describe('get profile error', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });

    test('error undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
