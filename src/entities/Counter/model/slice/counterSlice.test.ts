import { counterReducer, CounterSchema } from 'entities/Counter';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';

describe('counter slice', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 1 };

        expect(counterReducer(state, counterActions.incremented())).toEqual({ value: 2 });
    });
    test('decrement', () => {
        const state: CounterSchema = { value: 1 };

        expect(counterReducer(state, counterActions.decremented())).toEqual({ value: 0 });
    });

    test('undefined', () => {
        expect(counterReducer(undefined, counterActions.incremented()))
            .toEqual({ value: 1 });
    });
});
