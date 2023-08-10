import { profileActions, profileReducer, ProfileSchema } from '../../index';

describe('profile slice', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
});
