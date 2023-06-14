import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('get counter', () => {
    test('get counter state', () => {
        const state: StateSchema = {
            user: {},
            counter: { value: 10 },
        };

        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
