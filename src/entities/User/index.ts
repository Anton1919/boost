export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getAuthInited } from './model/selectors/getAuthInited/getAuthInited';

export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';
export { UserRole } from './model/const/const';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors/roleSelectors';
