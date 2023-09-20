import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducer: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div
                data-testid="AddCommentForm"
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    data-testid="AddCommentForm.Input"
                    className={cls.input}
                    placeholder={t('Введите текст')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button data-testid="AddCommentForm.Button" onClick={onSendHandler}>
                    {t('Добавить комментарий')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
