import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { ChangeEvent, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { sendComment } from 'features/addCommentForm/model/services/sendComment';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

interface AddCommentFormProps {
    className?: string;
}

const reducer: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className }: AddCommentFormProps) => {
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendComment = useCallback(() => {
        dispatch(sendComment());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendComment}>{t('Добавить комментарий')}</Button>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
