import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('get profile data', () => {
    test('should return counter value', () => {
        const data = {
            username: 'Anton',
            age: 27,
            city: 'Krasnodar',
            lastname: 'Anton',
            first: 'Anton',
            country: Country.Russia,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toBe(data);
    });

    test('data undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
