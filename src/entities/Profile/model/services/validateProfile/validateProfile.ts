import { ValidateProfileError } from '../../types/profile';
import { Profile } from '../../../model/types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        age, city, username, first, lastname,
    } = profile;
    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    return errors;
};
