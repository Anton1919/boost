import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { fetchProfileData } from '../fetchProfileData/fetchProfileData';

const data = {
    username: 'Anton',
    age: 27,
    city: 'Krasnodar',
    lastname: 'Anton',
    first: 'Anton',
    country: Country.Russia,
};

describe('fetch profile data', () => {
    test('success login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
