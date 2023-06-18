import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { memo, useCallback } from 'react';
import { loginAction } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginAction.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginAction.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                value={username}
                onChange={onChangeUserName}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите password')}
                value={password}
                onChange={onChangePassword}
            />
            <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
                {t('Войти')}
            </Button>
        </div>
    );
});
